import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  arrayUnion,
  arrayRemove,
  updateDoc,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqN3GE1cVe5QrktuApXADKlYQkYfvbddI",
  authDomain: "crwn-clothing-db-b293b.firebaseapp.com",
  projectId: "crwn-clothing-db-b293b",
  storageBucket: "crwn-clothing-db-b293b.appspot.com",
  messagingSenderId: "1013062550643",
  appId: "1:1013062550643:web:f27d370fae639c546c1606",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  try {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });

    await batch.commit();
  } catch (error) {
    console.log("something happened", error);
  }
};

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  try {
    const collectionRef = collection(db, collectionKey);
    await addDoc(collectionRef, objectToAdd);
  } catch (error) {
    console.log("something happened", error);
  }
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const getCollectionAndDocuments = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey);

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const removeProductFromList = async (category, productToRemove) => {
  const categoryRef = doc(db, "categories", category);

  await updateDoc(categoryRef, {
    items: arrayRemove(productToRemove),
  });

  console.log(`${productToRemove} removed from ${category}`);
};

export const addProductToList = async (category, productToAdd) => {
  const categoryRef = doc(db, "categories", category);

  await updateDoc(categoryRef, {
    items: arrayUnion(productToAdd),
  });

  console.log(`${productToAdd.id}: ${productToAdd.name} added to ${category}`);
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

// order related operations

// export const addOrderDocument = async (collection ) => {

// }
