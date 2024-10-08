import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import Headers from "./components/custom/Headers";

function App() {
  const [count, setCount] = useState(0);
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }

  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
}

export default App;
