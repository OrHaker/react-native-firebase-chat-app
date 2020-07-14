import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { Input } from "react-native-elements";
import { TouchableOpacity } from "react-native";
const windowWidth = Dimensions.get("window").width;
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "./../constants";

const AddMessageForm = (props) => {
  return (
    <View style={styles.bottom}>
      <Input
        multiline={true}
        inputContainerStyle={styles.input}
        onChangeText={(text) => props.setMessage(text)}
        value={props.message}
        leftIcon={
          <TouchableOpacity
            onPress={() => {
              props.addMessage();
            }}
          >
            <View style={styles.iconContainer}>
              <Icon name={"paper-plane"} size={24} color="black" />
            </View>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default AddMessageForm;

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: colors.add_message_form_background,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
  },
  input: {
    height: "70%",
    width: windowWidth - 30,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 40 / 2,
    backgroundColor: colors.add_message_input_background,
    marginTop: 2,
    paddingHorizontal: 5,
  },

  iconContainer: {
    borderRadius: 40 / 2,
    borderColor: colors.secondaryborder,
    borderWidth: 1,
    padding: 6,
  },
});
