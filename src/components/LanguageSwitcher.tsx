import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setLanguage } from '../redux/slices/languageSlice';
import i18n from '../i18n';

const LanguageSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.language.language);

  const handleLanguageChange = (lng: string) => {
    dispatch(setLanguage(lng));
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button
        onClick={() => handleLanguageChange('en')}
        disabled={currentLanguage === 'en'}
      >
        English
      </button>
      <button
        onClick={() => handleLanguageChange('fa')}
        disabled={currentLanguage === 'fa'}
      >
        فارسی
      </button>
    </div>
  );
};

export default LanguageSwitcher;
