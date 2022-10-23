import * as React from 'react';
import { NavLink, Link } from "react-router-dom";

import Header from '../components/header';
import DashboardTitle from '../components/Dashboard/DashboardTitle';



const Dashboard = () => {
    return (
        <div>
            <Header />
            <DashboardTitle />
        </div>
    )
}
export default Dashboard