import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import NewsContent from '../NewsContent/NewsContent'

const News = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="light"/>
        <Text style={styles.header}>Teknoloji Haberleri</Text>
        <NewsContent />
    </SafeAreaView>
  )
}

export default News

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "dodgerblue"
    },
    header: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 20
    }
})