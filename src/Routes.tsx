import { createBrowserRouter } from "react-router-dom"
import DefaultPage from "./pages/DefaultPage";
import App from "./App";
import Protected from '@/middlewares/Protected';
import Login from "./pages/Login";


const Routes = createBrowserRouter([{
  path: '/', element: <DefaultPage />,
  children: [
    { index: true, element: <Protected element={<App />} /> }
  ]
},
{ path: "/login", element: <Login /> }]);



export default Routes