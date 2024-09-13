import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import i18n from '../i18n';
import { RootState } from '../redux/store';
import { setLanguage } from '../redux/slices/languageSlice';

const useI18n = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.language.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);

    const handleLanguageChange = (lng: string) => {
      dispatch(setLanguage(lng));
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [currentLanguage, dispatch]);
};

export default useI18n;
