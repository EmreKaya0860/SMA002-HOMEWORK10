import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewsContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.newsContainer}>
        <Text>asfşlksafklfaskl</Text>
      </View>
      <View style={styles.hr}></View>
    </View>
  )
}

export default NewsContent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    newsContainer: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        height: 150,
        backgroundColor: "red",
    },
    hr: {
        height: 1,
        backgroundColor: "#00000011",
      },
})