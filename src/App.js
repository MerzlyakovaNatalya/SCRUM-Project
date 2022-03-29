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
          <Route path="layout/*" element={<Layout />}>
            <Route path=":feedback" element={<Feedback />} />
            <Route path=":main" element={<Main />} />
            <Route path=":hotelDirectory" element={<HotelDirectory />} />
            <Route path=":cityDirectory" element={<CityDirectory />} />
          </Route>
          <Route path="private" element={<PrivateOffice />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
