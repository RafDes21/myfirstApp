import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { AddItem, CustomModal, TaskList } from "./components";
import { colors } from "./constans/theme/colors";

const App = () => {
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
        state: false,
      },
    ]);
    setTask("");
  };

  const onHandlerSelect = (id) => {
    let arr = [];
    tasks.map((task) => {
      if (task.id === id) {
        task.state = !task.state;
      }
      arr.push(task);
    });

    setTasks(arr);
  };

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(item);
  };
  const taskDelete = () => {
    setTasks((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== selectedTask.id)
    );
    setIsModalVisible(!isModalVisible);
  };

  const cancel = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <AddItem
        buttomColor={colors.primary}
        buttonText="Add"
        placeholder="Add new task"
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
        task={task}
      />
      <Text style={styles.titleTasks}>Tasks List</Text>
      <TaskList
        tasks={tasks}
        onHandlerModal={onHandlerModal}
        onHandlerSelect={onHandlerSelect}
      />
      <CustomModal
        cancel={cancel}
        taskDelete={taskDelete}
        isModalVisible={isModalVisible}
        selectedTask={selectedTask}
      />
    </View>
  );
};

export default App;
