import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Homepage from "./pages/Homepage";
// import Product from "./pages/Product";
// import NotFoundPage from "./pages/NotFoundPage";
// import Pricing from "./pages/Pricing";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

// Lazy Loading for bundling this is the way of doing it we will do it all the time to reduce our bundles for server deployment.
const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesProvider";
import AuthProvider from "./contexts/AuthProvider";
import ProtectedRoute from "./pages/ProtectedRoute";
import SpinnerFullPage from "./components/SpinnerFullPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                {/* index means it's the default value for the routing */}
                <Route index element={<Homepage></Homepage>}></Route>
                <Route path="pricing" element={<Pricing></Pricing>}></Route>
                <Route path="product" element={<Product></Product>}></Route>
                <Route path="login" element={<Login></Login>}></Route>
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout></AppLayout>
                    </ProtectedRoute>
                  }
                >
                  <Route
                    index
                    element={<Navigate replace to={"cities"}></Navigate>}
                  ></Route>
                  <Route path="cities" element={<CityList></CityList>}></Route>
                  <Route path="cities/:id" element={<City></City>}></Route>
                  <Route
                    path="countries"
                    element={<CountryList></CountryList>}
                  ></Route>
                  <Route path="form" element={<Form></Form>}></Route>
                </Route>
                <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
