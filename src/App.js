import "./App.css";
import { Header } from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { PrivateOffice } from "./components/private_office/PrivateOffice";
import { Feedback } from "./components/feedback/feedback.jsx";
import { Main } from "./components/main/Main";
import { CityDirectory } from "./components/city_​​directory/CityDirectory";
import { HotelDirectory } from "./components/hotel_directory/HotelDirectory";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="layout" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="hotelDirectory" element={<HotelDirectory />} />
            <Route path="cityDirectory" element={<CityDirectory />} />
            <Route path="private" element={<PrivateOffice />} />
          </Route>
          <Route path="*" element={"NotFound"} />
        </Routes>
      </div>
    </>
  );
}

export default App;
