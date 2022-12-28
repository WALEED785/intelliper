import Header from "./Components/header";
import '../src/assets/css/style.css'
import '../src/assets/css/bootstrap.css'
import '../src/assets/css/responsive.css'
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import RouteNavigation from "./RouteNavigation";
function App() {
  return (
    <>
    <RouteNavigation />
    {/* <Routes>
      <Route path="/" element={<Home/>} />
    </Routes> */}
    {/* <Home/> */}
    </>
  );
}

export default App;
