import { BasicPage } from "../components/BasicPage";
import Home from "@mui/icons-material/Home";
//import useAuth from "../hooks/useAuth";
import { useAuthFB } from "../contexts/AuthFBContext";

export const HomePage = () => {

  const { user } = useAuthFB();
  let title =  "Home Page"; 
  if (user) {
    title = user.email;
  }

  return <BasicPage title={title} icon={<Home />} />;
};
