# Khan Honda Service Center CRM/POS/PWA
## Setup
1. Replace config in `js/firebase-config.js`.
2. Enable Auth Email/Password.
3. Create Firestore and Storage.
4. Deploy on Firebase Hosting: `firebase init hosting` then `firebase deploy`.

## Security Rules (starter)
```js
rules_version = '2';
service cloud.firestore { match /databases/{database}/documents {
match /appointments/{id} { allow create: if true; allow read,update,delete: if request.auth!=null; }
match /feedback/{id} { allow create: if true; allow read,update,delete: if request.auth!=null; }
match /bikes/{id} { allow read: if true; allow write: if request.auth!=null; }
match /{document=**} { allow read,write: if request.auth!=null; }
}}
```

## Migration
Use **Admin > Settings > Run localStorage migration** as first step; it reads keys:
`kh_clients, kh_invoices, kh_inventory, kh_appointments, kh_feedback, kh_notifications, kh_bikes`.

## Notes
- One visible **Book Appointment** button on home hero.
- One visible **Admin Login** button in header.
- Multi-page public app + protected admin page.
