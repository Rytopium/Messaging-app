npm install firebase
// firebaseConfig.js
const admin = require('firebase-admin');

const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'YOUR_DATABASE_URL'
});

const db = admin.firestore();

module.exports = { db };

