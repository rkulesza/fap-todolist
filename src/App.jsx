import RouterApp from "./RouterApp";
import { AuthProvider } from "./contexts/auth";

const App = () => (
    <AuthProvider>
      <RouterApp/>
    </AuthProvider>
);
export default App;
