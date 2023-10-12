import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { FontAwesome } from "@expo/vector-icons";

const NewsContent = (prop) => {
  const Images = {
    1: require("../assets/direksiyonHaberi.jpg"),
    2: require("../assets/trumpHuawei.jpg"),
    3: require("../assets/ekoOtogar.jpg"),
    4: require("../assets/xiaomiTelefon.jpg"),
    5: require("../assets/teknolojiDevleri.jpg"),
    6: require("../assets/googleYeniOrtağı.jpg"),
  };

  return (
    <View style={styles.container}>
      <View style={styles.newsContainer}>
        <Image source={Images[prop.new.id]} style={styles.image} />
        <View style={styles.text}>
          <Text>{prop.new.title}</Text>
          <View style={styles.textInfo}>
            <View style={styles.publishedByContainer}>
              <FontAwesome name="newspaper-o" size={20} color="black" />
              <Text>{prop.new.publishedBy}</Text>
            </View>
            <View style={styles.publishedDateContainer}>
              <FontAwesome name="clock-o" size={24} color="black" />
              <Text>{prop.new.publishDate}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.hr}></View>
    </View>
  );
};

export default NewsContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  newsContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    height: 100,
    flexDirection: "row",
  },
  hr: {
    height: 1,
    backgroundColor: "gray",
    opacity: 0.2,
  },
  image: {
    width: 100,
  },
  text: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  textInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  publishedByContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    marginRight: 20,
  },
  publishedDateContainer: {
    flex: 1,
    width: 100,
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
  },
});
