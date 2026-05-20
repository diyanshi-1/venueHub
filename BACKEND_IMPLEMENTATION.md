# VenueHub Backend Implementation Guide

This file explains how to convert the current UI prototype into a complete production website with Firebase Authentication, Firestore, Storage, Cloud Functions, Security Rules, and Hosting.

## 1. Important Security Rule

The current UI hides the admin panel from normal users, but UI hiding is not real security. In production:

- Normal users can choose only `user`, `client`, or `owner`.
- Admin access must come from Firebase Auth custom claims set by a trusted server environment.
- Firestore and Storage rules must enforce admin, owner, and client permissions.
- Never let a client-side form set `role = admin`.
- Remove the prototype admin passcode from `app.js` before production.

Official references:

- Firebase Web setup: https://firebase.google.com/docs/web/setup
- Firebase Auth web: https://firebase.google.com/docs/auth/web/start
- Firestore realtime updates: https://firebase.google.com/docs/firestore/query-data/listen
- Firebase Storage uploads: https://firebase.google.com/docs/storage/web/upload-files
- Callable Cloud Functions: https://firebase.google.com/docs/functions/callable
- Auth custom claims: https://firebase.google.com/docs/auth/admin/custom-claims
- Security Rules basics: https://firebase.google.com/docs/rules/basics
- Firebase Hosting: https://firebase.google.com/docs/hosting

## 2. Recommended Architecture

Use Firebase directly from the frontend for safe reads and user-owned writes, then use Cloud Functions for sensitive actions.

Frontend:

- Firebase Authentication for login/signup.
- Firestore realtime listeners for venues, bookings, chats, and approval updates.
- Firebase Storage for venue images.
- Cloud Functions callable APIs for protected workflows.

Backend:

- Firestore stores app data.
- Storage stores gallery images.
- Cloud Functions handles admin approval, role assignment, booking conflict checks, notifications, and validation.
- Firebase Security Rules enforce final permissions.

## 3. Install And Initialize

From the `venueHub` folder:

```bash
npm init -y
npm install firebase
npm install -g firebase-tools
firebase login
firebase init firestore storage functions hosting
```

For Hosting, set the public folder to the current app folder or a future `dist` folder if you migrate to Vite/React later.

## 4. Add Firebase Config

Create `firebase.js` and initialize Firebase with the config from Firebase Console.

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
```

If you keep this as plain HTML without a build tool, use `<script type="module">` files instead of classic scripts.

## 5. Firestore Data Model

Use these collections:

```text
users/{uid}
  displayName
  email
  role: "user" | "client" | "owner"
  photoURL
  createdAt
  ownerProfileCompleted

venues/{venueId}
  ownerId
  name
  description
  city
  address
  mapUrl
  coordinates
  minGuests
  maxGuests
  pricePerDay
  services: []
  spaceTypes: []
  facilities: []
  imageUrls: []
  status: "pending" | "approved" | "rejected"
  createdAt
  approvedAt
  approvedBy

bookings/{bookingId}
  venueId
  ownerId
  clientId
  fromDate
  toDate
  eventType
  guests
  services: []
  status: "pending" | "confirmed" | "rejected" | "cancelled"
  createdAt

chats/{chatId}
  venueId
  ownerId
  clientId
  participants: [ownerId, clientId]
  lastMessage
  updatedAt

chats/{chatId}/messages/{messageId}
  senderId
  text
  createdAt
  readBy: []

adminApprovals/{approvalId}
  venueId
  ownerId
  status
  reviewedBy
  reviewedAt
  notes
```

## 6. Auth And Role Flow

Signup roles:

- `user`: Can browse, chat, save venues.
- `client`: Can browse, chat, request bookings, track bookings.
- `owner`: Must complete owner profile and venue submission form.
- `admin`: Not selectable in the public UI.

Owner flow:

1. Owner signs up with role `owner`.
2. Create `users/{uid}` with `role = "owner"` and `ownerProfileCompleted = false`.
3. Send owner to the Instagram-style owner profile screen.
4. Require the add venue form before the first public listing.
5. Save new venues with `status = "pending"`.
6. Only approved venues appear publicly.

Admin flow:

1. Set admin using Firebase Admin SDK custom claims.
2. Admin signs in normally.
3. Client reads `currentUser.getIdTokenResult()` and checks `claims.admin === true`.
4. Show the admin panel only when the claim is present.
5. Firestore/Functions still enforce admin permission server-side.

## 7. Generate Backend APIs With Cloud Functions

Use callable functions for actions that need validation or privileged access.

Recommended APIs:

```text
submitVenueApplication(data)
approveVenue({ venueId })
rejectVenue({ venueId, reason })
createBooking(data)
confirmBooking({ bookingId })
rejectBooking({ bookingId, reason })
sendMessage({ chatId, text })
markMessagesRead({ chatId })
```

Example callable function:

```js
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { initializeApp } = require("firebase-admin/app");

initializeApp();
const db = getFirestore();

exports.approveVenue = onCall(async (request) => {
  if (!request.auth?.token?.admin) {
    throw new HttpsError("permission-denied", "Admin only.");
  }

  const { venueId } = request.data;
  await db.doc(`venues/${venueId}`).update({
    status: "approved",
    approvedBy: request.auth.uid,
    approvedAt: FieldValue.serverTimestamp()
  });

  return { ok: true };
});
```

Frontend call:

```js
import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase.js";

const approveVenue = httpsCallable(functions, "approveVenue");
await approveVenue({ venueId });
```

## 8. Firestore Realtime Integration

Replace local arrays in `app.js` with realtime Firestore queries.

Approved venues:

```js
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "./firebase.js";

const venuesQuery = query(
  collection(db, "venues"),
  where("status", "==", "approved")
);

onSnapshot(venuesQuery, (snapshot) => {
  const venues = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  renderVenuesFromFirestore(venues);
});
```

Pending admin approvals:

```js
const pendingQuery = query(
  collection(db, "venues"),
  where("status", "==", "pending")
);

onSnapshot(pendingQuery, (snapshot) => {
  renderAdminList(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
});
```

Chat messages:

```js
const messagesRef = collection(db, "chats", chatId, "messages");
onSnapshot(messagesRef, (snapshot) => {
  renderMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
});
```

## 9. Storage Uploads

Venue owner image upload flow:

1. Owner selects multiple images.
2. Upload each file to `venues/{ownerId}/{venueId}/{fileName}`.
3. Get each download URL.
4. Save URLs in `venues/{venueId}.imageUrls`.

```js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase.js";

async function uploadVenueImage(ownerId, venueId, file) {
  const fileRef = ref(storage, `venues/${ownerId}/${venueId}/${Date.now()}-${file.name}`);
  await uploadBytes(fileRef, file);
  return getDownloadURL(fileRef);
}
```

## 10. Security Rules Outline

Firestore rules should look like this conceptually:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function signedIn() {
      return request.auth != null;
    }

    function isAdmin() {
      return signedIn() && request.auth.token.admin == true;
    }

    function isOwner(uid) {
      return signedIn() && request.auth.uid == uid;
    }

    match /users/{uid} {
      allow read, update: if isOwner(uid) || isAdmin();
      allow create: if signedIn() && request.auth.uid == uid
        && request.resource.data.role in ["user", "client", "owner"];
    }

    match /venues/{venueId} {
      allow read: if resource.data.status == "approved" || isAdmin()
        || (signedIn() && resource.data.ownerId == request.auth.uid);
      allow create: if signedIn()
        && request.resource.data.ownerId == request.auth.uid
        && request.resource.data.status == "pending";
      allow update, delete: if isAdmin()
        || (signedIn() && resource.data.ownerId == request.auth.uid
          && resource.data.status != "approved");
    }

    match /bookings/{bookingId} {
      allow read: if isAdmin()
        || resource.data.clientId == request.auth.uid
        || resource.data.ownerId == request.auth.uid;
      allow create: if signedIn()
        && request.resource.data.clientId == request.auth.uid;
      allow update: if isAdmin()
        || resource.data.ownerId == request.auth.uid
        || resource.data.clientId == request.auth.uid;
    }

    match /chats/{chatId} {
      allow read, update: if signedIn()
        && request.auth.uid in resource.data.participants;
      allow create: if signedIn()
        && request.auth.uid in request.resource.data.participants;

      match /messages/{messageId} {
        allow read, create: if signedIn()
          && request.auth.uid in get(/databases/$(database)/documents/chats/$(chatId)).data.participants;
      }
    }
  }
}
```

Storage rules should allow owners to upload only to their own venue folder and allow public reads only for approved venue images. For stricter production control, serve approved image URLs through venue documents and keep writes owner/admin only.

## 11. Frontend Changes Needed

Replace prototype state in `app.js`:

- Replace `venues` array with Firestore approved venue listener.
- Replace `adminVenues` array with Firestore pending venue listener.
- Replace `conversations` array with `chats` and `messages` listeners.
- Replace prototype auth modal behavior with Firebase `createUserWithEmailAndPassword`, `signInWithEmailAndPassword`, and `onAuthStateChanged`.
- Replace prototype admin passcode with `getIdTokenResult()` custom claim detection.
- Replace file input placeholder with Firebase Storage uploads.
- Replace booking form demo submit with `createBooking`.
- Replace approve/reject demo buttons with `approveVenue` and `rejectVenue`.

## 12. Deployment

Deploy after rules and functions are ready:

```bash
firebase emulators:start
firebase deploy --only firestore:rules,storage,functions,hosting
```

Before final deployment:

- Test unauthenticated user cannot open admin data.
- Test normal user cannot set admin role.
- Test owner can read own pending venue but public users cannot.
- Test approved venues appear publicly.
- Test rejected venues stay hidden.
- Test booking date conflicts are blocked server-side.
- Test chat permissions allow only participants.

## 13. Can Codex Build The Backend?

Yes. I can build the backend properly for this project using Firebase Auth, Firestore, Storage, Functions, rules, and hosting. The cleanest next step is to migrate the static prototype into a Firebase-ready module structure, then implement Auth first, then Firestore data, then Storage uploads, then Cloud Functions and rules.
