import React, { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
