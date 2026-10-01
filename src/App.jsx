import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import NotFoundPage from "./pages/NotFoundPage";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
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
            <Route index element={<p>List of cities</p>}></Route>
            <Route path="cities" element={<p>List of cities</p>}></Route>
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
