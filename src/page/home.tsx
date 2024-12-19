import { SafeAreaView, StatusBar, View } from 'react-native';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useTranslation } from 'react-i18next';
import React from 'react';

const Home = () => {
  const { t, i18n } = useTranslation(); // not passing any namespace will use the defaultNS (by default set to 'translation')

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <SafeAreaView className='flex-1'>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View className=' justify-center items-center flex-1'>
        <Button variant='ghost'>
          <Text className="text-2xl font-bold underline leading-20">主页</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default Home;
