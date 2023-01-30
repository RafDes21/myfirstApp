import React from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";
import TaskItem from "./item";

const TaskList = ({ tasks, onHandlerModal, onHandlerSelect }) => {
  const renderItem = ({ item }) => (
    <TaskItem item={item} onHandlerModal={onHandlerModal} onHandlerSelect={onHandlerSelect} />
  );
  const keyExtractor = (item) => item.id;

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.listContainer}
    />
  );
};

export default TaskList;
