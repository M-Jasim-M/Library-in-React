import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/database";
import Book1 from "../../Asserts/Img/bookpic.jpg";
import Navbar from "../Dashboard/Navbar/Navbar";
import "./Addbook.css";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOCS489p_wLwr4t4d1j-SVq0-xh3r5D-g",
  authDomain: "library-c00cc.firebaseapp.com",
  databaseURL: "https://library-c00cc-default-rtdb.firebaseio.com",
  projectId: "library-c00cc",
  storageBucket: "library-c00cc.appspot.com",
  messagingSenderId: "482528942579",
  appId: "1:482528942579:web:0d2693e70290edcf3b5a86"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Login() {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookType, setBookType] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storageRef = firebase.storage().ref();

    // Upload image to Firebase Storage
    const imageRef = storageRef.child(`images/${image.name}`);
    imageRef.put(image).then(() => {
      console.log("Image uploaded successfully");
      imageRef.getDownloadURL().then((imageUrl) => {
        // Upload book data to Firebase Realtime Database
        const book = {
          bookName,
          authorName,
          bookType,
          imageUrl,
        };

        firebase
          .database()
          .ref("books")
          .push(book)
          .then(() => {
            console.log("Book added successfully to Firebase");
            setBookName("");
            setAuthorName("");
            setBookType("");
            setImage(null);
            setFile(null);
          })
          .catch((error) => {
            console.error("Error adding book to Firebase:", error);
          });
      });
    });

    // Upload file to Firebase Storage
    const fileRef = storageRef.child(`files/${file.name}`);
    fileRef.put(file).then(() => {
      console.log("File uploaded successfully");
    });
  };

  return (
    <>
      <Navbar />
      <div className="lmain">
        <div className="lleft">
          <img src={Book1} alt="" />
        </div>
        <div className="lright">
          <div className="sign">Add Your Book In The Library</div>
          <div className="enter">
            Add a book or notes in the Library with beautiful<br /> Picture that will be added in the library.
          </div>
          <form onSubmit={handleSubmit}>
            <label>Upload Image</label><br />
            <input type="file" accept="image/*" alt="Selected" onChange={handleImageUpload} /><br /><br />
            <label className="emi">Book Name*</label><br />
            <input
              type="text"
              placeholder="Book Name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            /><br /><br />
            <label className="pas">Author Name*</label><br />
            <input
              type="text"
              placeholder="Author Name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            /><br /><br />
            <label>Upload Book Pdf*</label><br />
            <input type="file" accept="application/pdf" onChange={handleFileUpload} /><br /><br />
            <label>Choose a Book Type</label><br />
            <select value={bookType} onChange={(e) => setBookType(e.target.value)}>
              <option value="poetry">Poetry</option>
              <option value="comedy">Botany</option>
              <option value="sweets">Hacking</option>
              <option value="food">Computer</option>
            </select><br /><br />
            <div className="but">
              <button type="submit">Submit Book</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
