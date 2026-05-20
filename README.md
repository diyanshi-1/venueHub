# VenueHub

Premium vanilla HTML, CSS, and JavaScript venue booking UI prototype.

## Files

- `index.html` - all UI screens and reusable markup
- `styles.css` - responsive premium UI styling, glassmorphism, cards, forms, chat, calendar
- `app.js` - search filtering, routing, calendar logic, chat updates, form handling, admin approvals
- `BACKEND_IMPLEMENTATION.md` - Firebase backend plan, APIs, rules, data model, and deployment guide

## Open

Open `index.html` in a browser. No build step is required.

Public visitors see only the homepage until they log in. The prototype supports user, client, venue owner, and guarded admin modes. For demo admin access, use the modal's admin passcode `venuehub-admin`; remove this before production and use Firebase custom claims instead.

## Firebase Integration Notes

This prototype includes the UI and front-end logic points where Firebase would connect:

- Firebase Authentication for user and venue owner role signup/login
- Firestore collections: `users`, `venues`, `bookings`, `chats`, `adminApprovals`
- Firebase Storage for venue gallery uploads
- Firestore realtime listeners for chats, booking status updates, and live venue approvals
