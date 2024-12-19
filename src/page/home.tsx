import {SafeAreaView} from 'react-native';
import {Button} from '@/components/ui/button';
import {Text} from '@/components/ui/text';
import {useTranslation} from 'react-i18next';

const Home = () => {
  const {t, i18n} = useTranslation(); // not passing any namespace will use the defaultNS (by default set to 'translation')

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <SafeAreaView>
      <Text>{t('simpleContent')}</Text>
      <Button onPress={() => changeLanguage('zh')}>
        <Text>中文</Text>
      </Button>
      <Button onPress={() => changeLanguage('en')}>
        <Text>英文</Text>
      </Button>
      <Text className="text-red-500">123</Text>
    </SafeAreaView>
  );
};
export default Home;
