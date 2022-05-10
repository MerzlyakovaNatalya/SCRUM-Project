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
import { ApartmentsMoscow } from "../apartments_Moscow/ApartmentsMoscow";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { HotelPrice } from "../hotel_price/HotelPrice";
import { RequireAuth } from "../hoc/RequireAuth";
import { Booking } from '../booking/Booking';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="layout" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="apartmentDirectory" element={<ApartmentDirectory />} />
        <Route path="hotelDirectory" element={<HotelDirectory />} />
        <Route path="cityDirectory" element={<CityDirectory />} />
        <Route path="apartmentMoscow" element={<ApartmentsMoscow />}/>
        <Route path="apartmentMoscow/:id" element={<Feedback />}/>
        <Route path="private" element={<PrivateOffice />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="hotels/:id/*" element={<Feedback />} />
      </Route>
      <Route path="*" element={"NotFound"} />
    </Routes>
  </BrowserRouter>
);
