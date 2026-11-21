import { useState } from "react";
import Login from "./components/Login";

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
    {isAuthenticated? (
      <div>
        <h1>
          Welcome to Recipe Planner!
        </h1>

        <p>
          Your login was successful 
        </p>

        <button
        onClick={() => setIsAuthenticated(false)}
        >
          Logout
        </button>
      </div>
    ): (
      <Login onLoginSuccess={handleLoginSuccess} />
    )}
    
    </>
  );
};

export default App;