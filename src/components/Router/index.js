import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CityDirectory } from "../city_​​directory/CityDirectory";
import Feedback from "../feedback/feedback";
import { Header } from "../header/Header";
import { HotelDirectory } from "../hotel_directory/HotelDirectory";
import { Layout } from "../layout/Layout";
import { Main } from "../main/Main";
import { PrivateOffice } from "../private_office/PrivateOffice";

export const Router = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);
