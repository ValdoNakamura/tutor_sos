import MainNavigation from "./src/navigation/MainNavigation";
import { AuthProvider } from "./src/context/AuthContext";


const App= () => {
  return (
    <AuthProvider>
      <MainNavigation/>
    </AuthProvider>
  );
}

export default App;
