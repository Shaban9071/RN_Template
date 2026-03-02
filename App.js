import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// 1. Gesture Handler import karein
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/navigation'
import { Provider } from 'react-redux';
import store, { persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Loaders } from './src/components';

export default function App() {
  return (
    <Provider store={store}>

       
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider style={{ flex: 1 }}>
          <PersistGate
            loading={<Loaders.Primary />}
            persistor={persistor}
          >
            <Navigation />
          </PersistGate>
        </SafeAreaProvider>
      </GestureHandlerRootView>

    </Provider>
  );
}