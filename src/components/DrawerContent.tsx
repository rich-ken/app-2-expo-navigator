import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
const image = require("../../assets/images/robot-dev.png");
type DrawerContentProps = {};

const iconSize = 60;
export const DrawerContent: React.FC<DrawerContentProps> = () => {
  const { top } = useSafeArea();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: top + 12,
          paddingLeft: 14,
          backgroundColor: "rgb(16,24,32)"
        }
      ]}
    >
      <View style={{}}>
        <Image
          source={image}
          style={{
            // tintColor: "gray",
            height: iconSize,
            width: iconSize,
            borderRadius: iconSize / 2
          }}
        />
      </View>
      <View style={{}}>
        <Text style={styles.name}>けん</Text>
        <Text style={styles.username}>@richken_jp</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  name: { fontSize: 20, color: "white", fontWeight: "600", marginTop: 12 },
  username: { fontSize: 14, color: "#888", marginTop: 2 }
});
