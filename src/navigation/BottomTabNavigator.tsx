// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { Platform } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import {
  BottomTab,
  navigatorOptions
} from "./util/bottom-tab-navigator-map.android";

// const BottomTab = createMaterialTopTabNavigator();

const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  // const { bottom } = useSafeArea();

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      {...navigatorOptions}
      // tabBarPosition="bottom"
      // swipeEnabled
      // tabBarOptions={{
      //   showIcon: true,
      //   indicatorStyle: Platform.select({
      //     ios: { backgroundColor: "transparent" }
      //   })
      // }}
      // style={{ paddingBottom: bottom }}
      barStyle={{ backgroundColor: "white" }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Get Started",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-code-working" />
          )
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "How to get started";
    case "Links":
      return "Links to learn more";
  }
}
