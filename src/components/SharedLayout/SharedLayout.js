import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Suspense } from "react";
import AppBar from "components/AppBar/AppBar";

export default function SharedLayout() {
    return(
    <div>
    <AppBar/>
    <Suspense fallback={null}>
    <Outlet/>
    </Suspense>
    <ToastContainer autoClose={6000} theme="light" />
    </div>
    );
};
