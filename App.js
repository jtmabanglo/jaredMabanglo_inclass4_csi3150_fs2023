import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import React, { useState } from "react";

// any additional imports
import Task from "./components/Task";

export default function App() {
  //input area
  const [task, setTask] = useState();

  //to store all tasks
  const [taskItems, setTaskItems] = useState([]);

  //event listener logic for creating a task
  const handleAddTask = () => {
    // when user hits submit the keyboard disappears
    Keyboard.dismiss();
    // adding task to array from text area
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  //event listener logic for deleting a task
  const completeTask = (index) => {
    let copyItems = [...taskItems];
    // remove the specific task as selected by the user

    copyItems.splice(index, 1);

    // update the original array by rewriting it with the original array
    setTaskItems(copyItems);
  };

  return (
    <View style={styles.container}>
      {/* List all the todo items */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>My To Do Items:</Text>

        {/* container or wrapper for the tasks to be rendered */}
        <View style={styles.items}>
          {/* <Task text={"this is task1"}/> */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* user input for todo tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add your to do item here"}
          //should be {text}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.plusButtonText}>+</Text>
            {/* <Image source={require("")}></Image> */}
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#55BCF6",
    borderWidth: 1,
    width: 300,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#55BCF6",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  plusButtonText: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
  },
});
