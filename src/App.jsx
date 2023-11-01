import RouterApp from "./RouterApp";
//import { AuthProvider } from "./contexts/auth";
import AuthFBProvider from "./contexts/AuthFBContext";

const App = () => (
    <AuthFBProvider>
      <RouterApp/>
    </AuthFBProvider>
);
export default App;

