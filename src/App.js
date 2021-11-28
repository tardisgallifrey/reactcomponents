import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";

export default function App(){

    return(
      <div>
        <NavBar />
        <Outlet />
        <h1>Welcome!</h1>
      </div>
    );
}
