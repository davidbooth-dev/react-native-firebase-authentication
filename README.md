# firebase-auth
React native firebase authentication using email and password

A 2 page native react app using firebase, expo and react navigation


using
    - expo
    - react navigation
    - stack navigator 

expo init <app-name> - using a blank template

cd <app-name>
expo start

goto: https://reactnavigation.org/docs/getting-started/
and install the required packages

npm install @react-navigation/native

install dependancies for expo managed project
    npx expo install react-native-screens react-native-safe-area-context
or
install dependancies for bare react native project
    npm install react-native-screens react-native-safe-area-context

scroll down the back and click next


install the native stack navigation library
    npm install @react-navigation/native-stack

 install firebase
    expo install firebase

copy:
    <pre>
        import { NavigationContainer } from '@react-navigation/native';
        import { createNativeStackNavigator } from '@react-navigation/native-stack';
    </pre>
and
    <pre>
        const Stack = createNativeStackNavigator();
    </pre>

and add into your app.js return statement

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

@see app.js
