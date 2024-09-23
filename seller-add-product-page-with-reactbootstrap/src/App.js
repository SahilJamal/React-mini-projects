import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./screen/Layout";
import Home from "./screen/Home";
import Blogs from "./screen/Blogs";
import Contact from "./screen/Contact";
import NoPage from "./screen/NoPage";
import SellerPage from "./screen/SellerPage";
import Bookmarks from "./screen/Bookmarks";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sellerpage" element={<SellerPage />} />
          <Route path="bookmark" element={<Bookmarks />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
