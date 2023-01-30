import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemList: {
    fontSize: 14,
    color: "#010101",
    textAlign: "center",
  },
  itemContainer: {
    backgroundColor: "#2f836a",
    width: "90%",
    padding: 20,
    borderRadius: 8,
    marginBottom: 5,
    marginHorizontal: 20,
  },
  taskItem:{
    flex:1,
    flexDirection: 'row',
    justifyContent: "space-between",
  }
});
