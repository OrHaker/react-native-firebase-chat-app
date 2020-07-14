import React from "react";
import { Header as RNEHeader } from "react-native-elements";
import { colors } from "./../constants";

const Header = (props) => {
  return (
    <RNEHeader
      containerStyle={{
        backgroundColor: colors.background,
        justifyContent: "space-around",
        height: 60,
      }}
      centerComponent={{
        text: `my username      ${props.username}`,
        style: { color: colors.text },
      }}
    />
  );
};

export default Header;
