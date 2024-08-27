import { createBrowserRouter } from "react-router-dom"
import DefaultPage from "./pages/DefaultPage";
import Home from "./Home";
import Protected from '@/middlewares/Protected';
import Login from "./pages/Login";


const Routes = createBrowserRouter([{
  path: '/', element: <DefaultPage />,
  children: [
    { index: true, element: <Protected element={<Home />} /> }
  ]
},
{ path: "/login", element: <Login /> }]);



export default Routes