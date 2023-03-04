import React, { useEffect } from "react";
import "../../styles/AdminDash/panel.css";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate]);

  return (
    <React.Fragment>
      <div className="admin-content">
      <div className="admin-wrapper">
      <div className="dashboard-widgets row">
        <div className="col-lg-6">
          <div className="card-widget widget-user mb-2">
            <div className="widget-user-decore">
              <div className="widget-decore-left">
                {/* <img src={Decoreleft} alt={Decoreleft} /> */}
              </div>
              <div className="widget-decore-right">
                {/* <img src={Decoreright} alt={Decoreright} /> */}
              </div>
            </div>
            <div className="card-widget-header">
              <div className="widget-icon">
                <i className="bx bxs-user-badge"></i>
              </div>
            </div>
            <div className="card-widget-body">
              <div className="widget-user-details">
                <h1 className="widget-user-title">
                  Welcome back !
                </h1>
                <p className="widget-user-description">
                  Here you'll find, number of orders made to date, live orders, 
                  different users signed up for the newsletter/promotions and many more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-widget mb-2">
                <div className="widget-flex">
                  <div className="widget-icon">
                  <i class='bx bx-user-circle'></i>
                  </div>
                  <div className="card-widget-body">
                    <h1 className="widget-count">0</h1>
                    <p className="widget-name">Users</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card-widget mb-2">
                <div className="widget-flex">
                  <div className="widget-icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <div className="card-widget-body">
                    <h1 className="widget-count">0</h1>
                    <p className="widget-name">Orders Received</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
