import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dimensions } from "react-native";
//constants
const windowWidth = Dimensions.get("window").width;
import { colors } from "../constants";

const Message = (props) => {
  const [dayString, setDayString] = useState("");
  const [hourString, setHourString] = useState("");
  const calcDay = () => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const today = new Date(new Date().toLocaleDateString());
    const otherDate = Date.parse(props.date.toLocaleDateString());
    const diffDays = Math.round((today - otherDate) / oneDay);
    if (!isNaN(diffDays)) {
      if (diffDays === 0) setDayString("Today");
      else if (diffDays === 1) setDayString("Yesterday");
      else setDayString(`${diffDays} days ago`);
      setHourString(props.date.toLocaleTimeString().substring(0, 5));
    }
  };
  useEffect(() => calcDay(), []);
  return (
    <View style={styles.main}>
      <View
        style={
          props?.myMessage ? styles.myMessageContainer : styles.othersContainer
        }
      >
        <Text style={styles.borderB}>{`${hourString} ${dayString}`}</Text>
        <Text
          style={[styles.borderB, styles.borderBottom]}
        >{`From ${props.username}`}</Text>
        <Text>{props.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: windowWidth,
  },
  othersContainer: {
    backgroundColor: colors.other_message_background,
    marginVertical: 10,
    borderBottomColor: "#000",
    borderWidth: 1,
    alignSelf: "flex-start",
    width: windowWidth / 2,
    marginLeft: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
  myMessageContainer: {
    backgroundColor: colors.my_message_background,
    marginVertical: 10,
    borderBottomColor: "#000",
    borderWidth: 1,
    alignSelf: "flex-end",
    width: windowWidth / 2,
    marginRight: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: -10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    overflow: "hidden",
  },
  borderB: {
    alignSelf: "flex-start",
    color: colors.text,
  },
  borderBottom: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default Message;
