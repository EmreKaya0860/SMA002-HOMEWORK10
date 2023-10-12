import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import NewsContent from "../NewsContent/NewsContent";
import New from "../new.json";

const News = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.header}>Teknoloji Haberleri</Text>
      {New.map((item) => (
        <NewsContent key={item.id} new={item} />
      ))}
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
  header: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 20,
  },
});
