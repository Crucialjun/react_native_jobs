import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./welcome.style";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}> Hello Nicholas</Text>
        <Text style={styles.welcomeMessage}> Find your prefect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}></TextInput>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
