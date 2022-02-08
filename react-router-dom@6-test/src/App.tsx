import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Shop from "./pages/Shop";
import Man from "./pages/Shop/Man";
import Woman from "./pages/Shop/Woman";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="mypage" element={<MyPage />} />
      <Route path="shop" element={<Shop />}>
        <Route path="man/:itemId" element={<Man />} />
        <Route path="woman/:itemId" element={<Woman />} />
      </Route>
    </Routes>
  );
}

export default App;
