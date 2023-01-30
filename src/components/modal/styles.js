import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalItem: {
    width: "90%",
    height: "50%",
    backgroundColor: "#808080",
  },
  modalText: {
    textAlign: "center",
    marginVertical: 80,
    fontSize: 30,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 80,
  },
});
