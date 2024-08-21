import React from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./component/layer/RootLayout";
import Home from "./component/page/Home";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
        // errorElement={<ErrorPage />}

      >
        <Route index element={<Home/>} ></Route>
        {/* <Route path='/service' element={<Service/>} ></Route> */}
      </Route>
    )
  );
  return (
   <>
     <RouterProvider router={router} />
   </>
  )
}

export default App