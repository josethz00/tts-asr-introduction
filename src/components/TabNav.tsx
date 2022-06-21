import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SpeechRecognitionScreen from '../screens/speech-recognition.screen';
import TextToSpeechScreen from '../screens/text-to-speech.screen';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={
        {
          headerShown: false,
          tabBarIconStyle: {
            display: 'none',
          }
        }
      }
    >
      <Tab.Screen name="TTS" component={TextToSpeechScreen}/>
      <Tab.Screen name="ASR" component={SpeechRecognitionScreen} />
    </Tab.Navigator>
  );
}