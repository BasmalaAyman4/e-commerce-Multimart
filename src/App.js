import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './Component/Global/NavBar/NavBar'
import Footer from './Component/Global/Footer/Footer'
import Router from './Router/Router'
import Loading from './Component/Global/Loading/Loading'
import DashNav from './Dashboard/DashNav/DashNav'
import { useLocation } from 'react-router-dom';
function App() {
  const [IsLoading, setIsLoading] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  return (
    <div className="App">
      {
        IsLoading ?
          <Loading />
          :
          <>
            {
              location.pathname.startsWith('/dashboard') ? <DashNav /> : <NavBar />
            }

            <Router />
            <Footer />
          </>
      }
    </div>
  );
}

export default App;
