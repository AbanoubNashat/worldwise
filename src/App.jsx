import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import NotFoundPage from "./pages/NotFoundPage";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There is an error fetching movies");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* index means it's the default value for the routing */}
          <Route index element={<Homepage></Homepage>}></Route>
          <Route path="/pricing" element={<Pricing></Pricing>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/app" element={<AppLayout></AppLayout>}>
            <Route
              index
              element={
                <CityList cities={cities} isLoading={isLoading}></CityList>
              }
            ></Route>
            <Route
              path="cities"
              element={
                <CityList cities={cities} isLoading={isLoading}></CityList>
              }
            ></Route>
            <Route path="countries" element={<p>List of countries</p>}></Route>
            <Route path="form" element={<p>Form</p>}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
