import React from 'react';
import './App.css';
import Routes from "./components/Routes/Routes";
import AuthContextProvider from './contexts/AuthContext';


function App() {
  return (
        <AuthContextProvider>

            <div className="App">
                  <header className="App-header">
                        <Routes/>
                  </header>
            </div>
        </AuthContextProvider>
        


  );
}

export default App;
