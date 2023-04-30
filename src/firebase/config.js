import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBRPUHBny-MunvtgwCTiFK9P4SugktLby4",
    authDomain: "olx--clone-6f21f.firebaseapp.com",
    projectId: "olx--clone-6f21f",
    storageBucket: "olx--clone-6f21f.appspot.com",
    messagingSenderId: "896818491862",
    appId: "1:896818491862:web:caa6df9618a98aaf573477",
    measurementId: "G-CK828KVHMT"
}

export default firebase.initializeApp(firebaseConfig);