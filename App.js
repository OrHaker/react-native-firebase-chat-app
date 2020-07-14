import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

//firebase
import db from "./firebase";
import * as firebase from "firebase";
import Header from "./components/Header";
import MessagesList from "./components/MessagesList";
import AddMessageForm from "./components/AddMessageForm";
import SignInForm from "./components/SignInForm";

export default function App() {
  const [username, setUsername] = useState("");
  const [tempUsername, setTempUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  //add message to db
  const addMessage = () => {
    if (message === "") return;
    db.collection("messages").add({
      message,
      username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };

  useEffect(() => {
    setupMessagesListener();
  }, []);

  //subscribe to messages collection for changes and etec
  const setupMessagesListener = () => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        let arr = [];
        querySnapshot.forEach((doc) => arr.push(doc.data()));
        setMessages(arr);
      });
  };
  if (username === "")
    return (
      <SignInForm
        setTempUsername={setTempUsername}
        tempUsername={tempUsername}
        setUsername={setUsername}
      />
    );
  else
    return (
      <View style={styles.container}>
        <Header username={username} />
        <MessagesList messages={messages} username={username} />
        <AddMessageForm
          setMessage={setMessage}
          addMessage={addMessage}
          message={message}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
