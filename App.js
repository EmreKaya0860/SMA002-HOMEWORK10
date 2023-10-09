import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import News from './components/news/News';

export default function App() {
  return (
    <SafeAreaProvider>
      <News />
    </SafeAreaProvider>
  );
}

