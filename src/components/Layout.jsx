import { Link, Outlet } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import WindowBarBar from "./WindowBar";


const Layout = () => (
    <>
        <WindowBarBar />

        <SimpleBar
            forceVisible="y"
            autoHide={true}
            style={{ maxHeight: "100vh" }}
        >
            <main className=" mt-8 w-full space-y-4 py-2 px-3">
                <Outlet />
            </main>
        </SimpleBar>
    </>
);

export default Layout;