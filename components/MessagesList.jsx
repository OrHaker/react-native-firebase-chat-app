import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Message from "./Message";
import { ImageBackground, FlatList } from "react-native";

const MessagesList = (props) => {
  return (
    <ImageBackground
      source={require("../assets/background2.jpg")}
      style={styles.image}
    >
      <FlatList
        inverted={true}
        data={props.messages}
        keyExtractor={(msg) =>
          msg.username + msg.message + Math.floor(Math.random() * 8000) + 1
        }
        renderItem={({ item }, index) => {
          return (
            <Message
              myMessage={item.username === props.username}
              key={index}
              username={item.username}
              message={item.message}
              date={new Date(item?.timestamp?.seconds * 1000)}
            />
          );
        }}
      />
    </ImageBackground>
  );
};

export default MessagesList;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    paddingBottom: 50,
  },
});
