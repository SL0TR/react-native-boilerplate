import React, { useEffect } from 'react';
import { Container, H3 } from '@app/styles';
import { useDispatch, useSelector } from 'react-redux';
import { languages } from '@app/config';
import { TouchableOpacity } from 'react-native';
import { changeLanguage } from './reducer';
import { useTranslation } from 'react-i18next';

function LanguageSwitch() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(state => state.Language.currentLanguage);
  const [selectedLang, setSelectedLang] = React.useState(currentLanguage.name);
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(changeLanguage(selectedLang));
  }, [selectedLang]);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage.locale);
  }, [currentLanguage]);

  return (
    <>
      {languages.map(lang => (
        <TouchableOpacity
          key={lang.locale}
          style={{ height: 58, width: '100%' }}
          onPress={() => setSelectedLang(lang.name)}
        >
          <Container
            width="100%"
            height="100%"
            px="18px"
            bg={selectedLang === lang.name ? 'primary' : ''}
            align="center"
          >
            <H3>{lang.name}</H3>
          </Container>
        </TouchableOpacity>
      ))}
    </>
  );
}

export default LanguageSwitch;
