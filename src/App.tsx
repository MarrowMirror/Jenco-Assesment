import AppRouter from './router/AppRouter';
import useLenis from './hooks/useLenis';
import SettingsWidget from './components/ui/SettingsWidget';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useLenis();

  return (
    <ThemeProvider>
      <AppRouter />
      <SettingsWidget />
    </ThemeProvider>
  );
}

export default App;