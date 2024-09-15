import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components//Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart"; 

// Chunking 
// Code Splitting
// Dynamic Bundling
// Lazy Loading 
// On Demand Loading

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {

    //Authentication

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Abhishek Khandelwal"
        }
        setUserName(data.name);
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName}}>
                <div className="app">
                    <Header />                
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children : [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading.......</h1>}>
                        <Grocery />
                    </Suspense>
                )
            },
            {
                path: "/cart",
                element: <Cart />
            }            
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)