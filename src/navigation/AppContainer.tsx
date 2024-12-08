import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ChapterList } from '../components/screens/ChapterList';
import { MeditationList } from '../components/screens/MeditationList';
import { Player } from '../components/screens/Player';
import { RouteProp } from '@react-navigation/native'; // Import RouteProp
import { NavigationParams } from '../types';

const Stack = createStackNavigator<NavigationParams>();

type MeditationListRouteProp = RouteProp<NavigationParams, 'MeditationList'>;

export function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Chapters"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="Chapters"
          component={ChapterList}
          options={{ title: 'Meditation Program' }}
        />
        <Stack.Screen
          name="MeditationList"
          component={MeditationList}
          options={({ route }: { route: MeditationListRouteProp }) => ({
            title: route.params?.chapterId || 'Meditations',
          })}
        />
        <Stack.Screen
          name="Player"
          component={Player}
          options={{ title: 'Meditation Player' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
