/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import '@/global.css';

import '@/translations';
import ApplicationNavigator from '@/navigation/Application';
import Theme from '@/theme';

function App(): React.JSX.Element {
  return (
    <Theme>
      <ApplicationNavigator />
    </Theme>
  );
}

export default App;
