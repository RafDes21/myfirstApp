import React from "react";
import { styles } from "./styles";
import { Button, Modal, Text, View } from "react-native";

const CustomModal = ({ cancel, taskDelete, isModalVisible, selectedTask }) => {
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalItem}>
          <Text style={styles.modalText}>{selectedTask?.value}</Text>
          <View style={styles.modalButtons}>
            <Button onPress={cancel} title="cancel" />
            <Button onPress={taskDelete} title="delete" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
