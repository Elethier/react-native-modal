import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  backdrop: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    opacity: 0,
    backgroundColor: "black"
  },
  content: {
    flex: 1,
    justifyContent: "center"
  },
  contentContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});
