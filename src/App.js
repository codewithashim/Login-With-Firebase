import { RouterProvider } from "react-router-dom";
import "./App.css";
import route from "./Components/Router/Router";

function App() {
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
