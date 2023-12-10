import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { Feather } from "@expo/vector-icons";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        {/* <View style={styles.squareIcon}></View> */}
        {/* replaced square icon with check icon */}
        <Feather name="check-square" size={24} color="#55BCF6" />
        <Text style={styles.itemText}>{props.text}</Text>
      </View>

      {/* removed circular icon to the right */}
      {/* circular icon to the right */}
      {/* <View style={styles.circularIcon}></View> */}
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  /* remove square icon styling
  squareIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },*/
  itemText: {
    maxWidth: "80%",
    paddingLeft: 15,
  },
  /*remove circular icon styling
  circularIcon: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },*/
});
