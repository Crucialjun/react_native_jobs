import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./welcome.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons } from "../../../constants";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}> Hello Nicholas</Text>
        <Text style={styles.welcomeMessage}> Find your prefect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for? "
          ></TextInput>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
