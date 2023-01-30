import React from "react";
import { Button, TextInput, View } from "react-native";
import { styles } from "./styles";

const AddItem = ({
  placeholder,
  buttonText,
  task,
  onHandlerChange,
  onHandlerSubmit,
  buttomColor
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={task}
        onChangeText={onHandlerChange}
      />
      <Button
        disabled={!task}
        title={buttonText}
        color={buttomColor}
        onPress={onHandlerSubmit}
      />
    </View>
  );
};

export default AddItem;
