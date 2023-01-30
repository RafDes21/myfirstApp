import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./styles";

const TaskItem = ({ item, onHandlerModal, onHandlerSelect }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onHandlerModal(item)}
    >
      <View style={styles.taskItem}>
        <Text style={styles.itemList}>{item.value}</Text>
        <FontAwesome
          name="star"
          size={30}
          onPress={()=>onHandlerSelect(item.id)}
          color= {item.state ? '#00ff00': "#010101"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;
