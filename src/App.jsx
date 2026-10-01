import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import NotFoundPage from "./pages/NotFoundPage";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/app" element={<AppLayout></AppLayout>}></Route>
          <Route path="product" element={<Product></Product>}></Route>
          <Route path="Pricing" element={<Pricing></Pricing>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
