import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyANV5bzbmB1xNxFhGSNKD1Lcs2_GVp2Rz4',
  authDomain: 'marcone-msa-training-portal.firebaseapp.com',
  projectId: 'marcone-msa-training-portal',
  storageBucket: 'marcone-msa-training-portal.appspot.com',
  messagingSenderId: '204746095405',
  appId: '1:204746095405:web:f479992b1877d25fc1b1a4',
  measurementId: 'G-G1NG4BWKEP',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
