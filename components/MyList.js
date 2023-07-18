import React from "react";
import { View, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";

const MyList = () => {
  return ( 
    <FlashList
      data={DATA}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      estimatedItemSize={200}
    />
  );
};

export default MyList