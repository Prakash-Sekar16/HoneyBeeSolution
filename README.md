# HoneyBee Solution

Responsive home-services website for residential customers. Services include electrical work, plumbing, CCTV installation and AC service. Customers can submit booking/contact forms or continue through WhatsApp.

## Stack
- React + Vite + React Router
- Firebase Cloud Firestore for booking and contact submissions
- Firebase Storage for optional service photos
- Lucide React icons

## Setup
1. Install Node.js (18+ recommended).
2. Run `npm install`.
3. Copy `.env.example` to `.env` and fill in the Firebase web app configuration.
4. In Firebase Console, create Firestore Database and enable Storage. Authentication is not used.
5. Install Firebase CLI: `npm install -g firebase-tools`.
6. Run `firebase login`, then `firebase use --add` and select your Firebase project.
7. Deploy rules: `firebase deploy --only firestore:rules,storage`.
8. Set `VITE_WHATSAPP_NUMBER` to your WhatsApp number with country code, no plus sign or spaces.
9. Start locally using `npm run dev`; create a production build using `npm run build`.

## Environment variables
All Firebase values are available in Firebase Console → Project settings → General → Your apps → Web app. Vite exposes variables prefixed with `VITE_` to browser code. Never put private service-account credentials in this file.

## Data collections
- `bookings`: customerName, phone, email, service, address, preferredDate, preferredTime, message, imageUrl, status, createdAt.
- `contacts`: name, phone, email, message, createdAt.

## Important production security notes
This version intentionally has no login/authentication. Public forms can be spammed, and browser-side rules cannot reliably enforce rate limits. For production, route submissions through a Cloud Function or trusted backend with App Check, validation, rate limiting and abuse monitoring. Do not add public read access to bookings or contacts. Storage uploads are restricted to images under 5 MB and are not publicly readable; a production upload workflow should use a backend to validate and issue controlled access. The website does not include a private admin dashboard because no authentication was requested.
