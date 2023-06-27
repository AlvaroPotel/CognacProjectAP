import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from "assets/img/pages/Listing";
import DetailsDrink from "assets/img/pages/DetailsDrink";
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/detailsdrink">
          <Route path=":drinkId" element={<DetailsDrink />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;