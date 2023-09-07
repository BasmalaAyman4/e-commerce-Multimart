import React, { useLocation, useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './Component/Global/NavBar/NavBar'
import Footer from './Component/Global/Footer/Footer'
import Router from './Router/Router'
import Loading from './Component/Global/Loading/Loading'
function App() {
  const [IsLoading, setIsLoading] = useState(false)
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
            <NavBar />
            <Router />
            <Footer />
          </>
      }
    </div>
  );
}

export default App;
