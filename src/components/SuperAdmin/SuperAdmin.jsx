import "./SuperAdmin.css";
import Background from "../../UI/Background";
import React, { useEffect } from "react";
import { auth, provider } from "../../pages/CulturalDetail/Form/firebase.js";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
    
    
    const logIn = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
          const user = result.user;
          console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
    

  return (
    <section className="gallerySection">
      <Background className="galleryBg"></Background>
      <div className="row">
        <button onClick = {logIn}>Log In</button>
      </div>
    </section>
  );
};

export default Gallery;
