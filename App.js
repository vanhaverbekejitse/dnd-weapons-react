import { ThemedNavigation } from './src/navigation/AppNavigator';
import { AppProvider } from './src/context/AppContext';

export default function App() {
  return (
    <AppProvider>
      <ThemedNavigation />
    </AppProvider>
  );
}
