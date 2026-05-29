# VenueHub

Premium vanilla HTML, CSS, and JavaScript venue booking UI prototype.

## Files

- `index.html` - all UI screens and reusable markup
- `styles.css` - responsive premium UI styling, glassmorphism, cards, forms, chat, calendar
- `app.js` - search filtering, routing, calendar logic, chat updates, form handling, admin approvals
- `server.js` - local prototype server that saves data into Desktop files
- `startVenueHub.bat` - double-click launcher for the local prototype
- `data/` - generated JSON and CSV files for users, venues, bookings, and chats
- `BACKEND_IMPLEMENTATION.md` - Firebase backend plan, APIs, rules, data model, and deployment guide

## Open

For file saving, run the local prototype server:

```bash
node server.js
```

Then open:

```text
http://localhost:4173
```

You can also double-click `startVenueHub.bat`.

Public visitors see only the homepage until they log in. The prototype supports user, client, venue owner, and guarded admin modes. For demo admin access, use the modal's admin passcode `admin12`.

## Local File Storage

The prototype writes data into:

- `data/users.json` and `data/users.csv`
- `data/ownerProfile.json` and `data/ownerProfile.csv`
- `data/venues.json` and `data/venues.csv`
- `data/bookings.json` and `data/bookings.csv`
- `data/reviews.json` and `data/reviews.csv`
- `data/chats.json`

Venue owner submissions are saved with `status = pending`. When admin approves or rejects, the same venue row is updated. Bookings are saved with `status = incomplete` and can be marked `completed` from the admin panel.
Approved venues are shown in public discovery for booking. Client accounts can add ratings and reviews, venue owners can view reviews for their own venues, and admins can delete inappropriate reviews from the admin panel.
