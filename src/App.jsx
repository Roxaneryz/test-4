import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { lazy, useEffect } from "react";
import { getUserInfo } from "./service";

const Home = lazy(() =>import("pages/Home.jsx") )
const Rates = lazy(()=>import("pages/Rates"))
export const App = () => {

useEffect(() => {navigator.geolocation.getCurrentPosition(pos=>getUserInfo(pos.coords))}, [])

  return (
  <Routes>
    <Route path="/" element={<Header/>}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="*" element = {<Navigate to="/"/>}/>
    </Route>
  </Routes>

  )

};
