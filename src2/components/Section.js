import React from "react";
import { StyleSheet, View, Text, Platform, Button } from "react-native";

export default function Section({ title = "default" }) {
  return (
    <View>
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    marginVertical: 20,
    padding: 20,
    textAlign: "center",
    backgroundColor: "white",
    fontSize: 30,
  },
});
