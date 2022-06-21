import 'expo-dev-client';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import TabNav from './src/components/TabNav';

export default function App() {
  return (
    <> 
      <StatusBar style="auto" />
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </>
  );
}