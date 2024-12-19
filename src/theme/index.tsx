import {ThemeProvider} from '@react-navigation/native';
import * as React from 'react';

import {NAV_THEME} from '../lib/constants';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme} from '../lib/useColorScheme';

interface IThemeProps {
  children: React.ReactNode;
}

const Theme: React.FunctionComponent<IThemeProps> = props => {
  const {colorScheme, setColorScheme, isDarkColorScheme} = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem('theme');
      if (Platform.OS === 'web') {
        // Adds the background color to the html element to prevent white background on overscroll.
        // document.documentElement.classList.add('bg-background');
      }
      if (!theme) {
        AsyncStorage.setItem('theme', colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      const colorTheme = theme === 'dark' ? 'dark' : 'light';
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);

        setIsColorSchemeLoaded(true);
        return;
      }
      setIsColorSchemeLoaded(true);
    })().finally(() => {
      // SplashScreen.hideAsync();
    });
  }, []);

  return (
    <ThemeProvider
      value={{
        dark: false,
        colors: NAV_THEME.light,
      }}>
      {props.children}
    </ThemeProvider>
  );
};

export default Theme;
