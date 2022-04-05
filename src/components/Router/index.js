import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CityDirectory } from "../city_​​directory/CityDirectory";
import Feedback from "../feedback/feedback";
import { Header } from "../header/Header";
import { HotelDirectory } from "../hotel_directory/HotelDirectory";
import { Layout } from "../layout/Layout";
import { Main } from "../main/Main";
import { Hotels } from "../pageHotels";
import { PrivateOffice } from "../private_office/PrivateOffice";
import { ApartmentDirectory } from "../apartment_directory/ApartmentDirectory";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="layout" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="apartmentDirectory" element={<ApartmentDirectory />} />
        <Route path="hotelDirectory" element={<HotelDirectory />} />
        <Route path="cityDirectory" element={<CityDirectory />} />
        <Route path="private" element={<PrivateOffice />} />
        <Route path="hotels" element={<Hotels />} />
      </Route>
      <Route path="*" element={"NotFound"} />
    </Routes>
  </BrowserRouter>
);
