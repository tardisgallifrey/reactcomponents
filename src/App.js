import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";

export default function App(){

    return(
      <div>
        <NavBar />
        <Outlet />
        <h1>Welcome!</h1>
        <hr />
        <p>The Navigation Menu Bar above is a component in use throughout this app.</p>
      </div>
    );
}
