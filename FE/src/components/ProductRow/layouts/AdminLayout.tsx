import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../partials/Admin/Sidebar";


type Props = object;

const AdminLayout = (props: Props) => {
    return (
        <div>
            <aside>
                <Sidebar />
            </aside>
        </div>
    );
};

export default AdminLayout;
