import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";

import styles from "./welcome.style";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { SIZES, icons } from "../../../constants";
import { useRouter } from "expo-router";

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-Time");
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
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push("/search/${item}");
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        ></FlatList>
      </View>
    </View>
  );
};

export default Welcome;
