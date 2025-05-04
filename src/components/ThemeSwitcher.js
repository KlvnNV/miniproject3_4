import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ThemeSwitcher() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Переключить тему
    </button>
  );
}

export default ThemeSwitcher;
