import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Dimensions } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { colors } from "./../constants";

//constants
const windowWidth = Dimensions.get("window").width;

const SignInForm = (props) => {
  return (
    <View style={styles.alignCenter}>
      <Text>Enter your username</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => props.setTempUsername(text)}
        value={props.tempUsername}
      />
      <Button
        title="Enter chat"
        onPress={() => props.setUsername(props.tempUsername)}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  alignCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: colors.sign_in_text,
    backgroundColor: colors.sign_in_background,
  },
  input: {
    width: windowWidth - 50,
    borderColor: colors.sign_in_input_border,
    borderWidth: 1,
    borderRadius: 40 / 2,
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: colors.sign_in_button_background,
    marginVertical: 20,
    color: "#fff",
  },
  titleStyle: {
    color: colors.sign_in_button_title,
  },
});
