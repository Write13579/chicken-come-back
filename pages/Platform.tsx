import { ScrollView, Text } from "react-native";
import { bgColor } from "../colors";
import React from "react";

const Platform: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: bgColor }}>
      <Text>Platform</Text>
    </ScrollView>
  );
};

export default Platform;
