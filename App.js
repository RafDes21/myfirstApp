import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (text) => {
    setTask(text);
  };
  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task,
      },
    ]);
    setTask("");
  };

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(item);
  };
  const taskDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);
    console.warn('elminado' );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={()=>onHandlerModal(item)}
    >
      <Text style={styles.itemList}>{item.value}</Text>
    </TouchableOpacity>
  );

  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="add a new task"
          value={task}
          onChangeText={onHandlerChange}
        />
        <Button
          disabled={!task}
          title="Add"
          color="#808080"
          onPress={onHandlerSubmit}
        />
      </View>
      <Text style={styles.titleTasks}>Tasks List</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
      <Modal visible={isModalVisible} animationType="slide">
        <Text>hola modal</Text>
        <Button onPress={()=>setIsModalVisible(!isModalVisible)} title='cancel'/>
        <Button onPress={taskDelete} title='delete'/>

      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  input: {
    borderBottomColor: "#010101",
    borderBottomWidth: 1,
    height: 40,
    color: "#212121",
    width: "75%",
  },
  listContainer: {
    marginTop: 40,
  },
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
  titleTasks: {
    textAlign: "center",
    marginTop: 40,
  },
});
