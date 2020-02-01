import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/functions";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
  }

  userExists = uid => this.db.ref(`/${uid}`);
  user = uid => this.db.ref(`/${uid}/user`);
  journal = uid => this.db.ref(`/${uid}/journal`);
  /*
  weight = uid => this.db.ref(`/${uid}/weight`);
  withings = uid => this.db.ref(`/${uid}/withings`);
  chat = uid => this.db.ref(`/${uid}/chat`);
  logs = uid => this.db.ref(`/${uid}/logs`);
  */

  toArray = data =>
    Object.keys(data).map(key => ({
      id: key,
      ...data[key]
    }));
}

export default new Firebase();
