import React from "react";
import { View, Text } from "react-native";
import Section from "@/components/Section";
import { Link } from "@react-navigation/native";

export default function HomeScreen() {
  return (
    <View>
      <Section title="HomeScreen" />

      <Link to={{ screen: "user", params: { id: "jane" } }}>
        Go to Jane's profile
      </Link>
    </View>
  );
}
