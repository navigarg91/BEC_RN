import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, LogBox, StatusBar,Platform } from 'react-native';

import FlashMessage from 'react-native-flash-message'
import AppContainer from './Src/Navigation';
import { Provider } from 'react-redux';

LogBox.ignoreAllLogs();

class App extends React.Component {
  render() {
    const store = require('./Src/Redux/Store').default;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#008BD0" }}>
        <Provider store={store}>
          <StatusBar
            backgroundColor="#008BD0"

          />
          <AppContainer />
        </Provider>
        {/* <FlashMessage position="top"
              hideStatusBar = ""

         /> */}
        <FlashMessage position={Platform.OS === 'ios' ? "top" : { top: 0, left: 0, right: 0 }}  />





      </SafeAreaView>
    );
  }
}
export default App;