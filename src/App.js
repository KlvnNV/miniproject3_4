//Домашнее задание: 
//реализовать переключение темы (светлая / тёмная)
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <ThemeSwitcher />
      <main>
        <p>Это основное содержимое страницы</p>
      </main>
    </ThemeProvider>
  );
}

export default App;
