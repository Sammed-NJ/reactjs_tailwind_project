import './App.css'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import Home from './assets/pages/Home'
import Add from './assets/pages/Add'
import Gig from './assets/pages/Gig'
import Gigs from './assets/pages/Gigs'
import Login from './assets/pages/Login'
import Message from './assets/pages/Message'
import Messages from './assets/pages/Messages'
import MyGigs from './assets/pages/MyGigs'
import Orders from './assets/pages/Orders'
import Register from './assets/pages/Register'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {


  const Layout = () => {
    return (
      <div className='app'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/gig",
          element: <Gig />
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/myGigs",
          element: <MyGigs />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/register",
          element: <Register />
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
