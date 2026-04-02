import { Outlet } from "react-router-dom"; //(placeholder) donde React Router renderiza el componente de la ruta actual.
import Navbar from "../components/Navbar";

const MainLayout = ({ cart }) => {
  return (
    <>
      <Navbar cart={cart}/>
      <Outlet /> {/* Aqui ira el renderizado del componente que hayamos definido */}
    </>
  );
};

export default MainLayout;