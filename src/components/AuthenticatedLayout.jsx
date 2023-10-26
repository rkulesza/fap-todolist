import { Link, Navigate, useOutlet } from "react-router-dom";
//import { useAuth } from "../hooks/useAuth";
import { AppBar } from "./AppBar";

export const AuthenticatedLayout = () => {
  //const { user } = useAuth();
  const outlet = useOutlet();

  //if (!user) {
  //  return <Navigate to="/" />;
  //}

  return (
    <div>
      <AppBar
        pages={[
          { label: "TODO", path: "todo" },
        ]}  
      />
      {outlet}
    </div>
  );
};
