
 import React from 'react';
 import {StatusBar, StyleSheet,LogBox} from 'react-native';
 
 import 'react-native-gesture-handler';
 import {Provider} from 'react-redux';
 import {PersistGate} from 'redux-persist/integration/react';
 import {persistStore} from 'redux-persist';
 // import { store } from './src/app/reduxHelpers/store';
 import store from './src/store';
 import Routes from './src/routes';

 // import RemotePushController from './src/RemotePushController';
 LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
 LogBox.ignoreAllLogs(); //Ignore all log notifications
 
 let persistor = persistStore(store);
 const App = () => {
   return (
     <Provider store={store}>
       <StatusBar
         translucent
         barStyle="dark-content"
         backgroundColor="transparent"
       />
       <PersistGate loading={null} persistor={persistor}/>
       <Routes/>
     </Provider>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
 });
 
 export default App;
 