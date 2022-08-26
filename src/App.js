import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Routes, useNavigate } from "react-router-dom";
import Galery from './pages/Galery'
import Landing from './pages/Landing'

export default function App(props) {
  const navigate = useNavigate();
  return (
      <div>
        <button onClick={() => navigate('/')}>Back</button>
        <Routes>
            <Route exact path={"/"} element={<Landing />} />
            <Route exact path={"/galery"} element={<Galery />} />
        </Routes>
      </div>
  )

}

