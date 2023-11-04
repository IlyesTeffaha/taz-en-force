
import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import SwiperImages from "../components/imageSwiper/ImageSwiper";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      {/* Home page route with SwiperImages component */}
      <Route index element={<SwiperImages />} />
      {/* ... (other routes) ... */}
    </Route>
  )
);
