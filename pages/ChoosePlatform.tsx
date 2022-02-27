import { Button, ScrollView, Text } from "react-native";
import { bgColor } from "../colors";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

const ChoosePlatform: React.FC<NativeStackScreenProps<RootStackParamList>> = ({
  navigation,
}) => {
  return (
    <ScrollView style={{ backgroundColor: bgColor }}>
      <Text>Ziemniaki</Text>
      <Button
        title={"Ho no na przystnek ziomku"}
        onPress={() => navigation.navigate("Platform")}
      />
    </ScrollView>
  );
};

export default ChoosePlatform;
