import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Текущая тема: {theme === 'light' ? 'Светлая' : 'Тёмная'}</h1>
    </header>
  );
}

export default Header;
