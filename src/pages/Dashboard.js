import * as React from 'react';
import { NavLink, Link } from "react-router-dom";

import Header from '../components/header';
import DashboardTitle from '../components/Dashboard/DashboardTitle';
import UserProfile from '../components/Dashboard/UserProfile';

import "../styles/components/dashboard.scss"

const Dashboard = () => {
    return (
        <div>
            <Header />
            <DashboardTitle />
            <div className='dashboard-content contain'>
                <div className='dashboard-left'>
                    <UserProfile />
                </div>
                <div className='dashboard-right'>
                    right
                </div>
            </div>
        </div>
    )
}
export default Dashboard