import React from 'react';
import { Link } from 'react-router-dom';
import SearchPlace from '../SearchPlace/SearchPlace';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="md:container md:mx-auto">
        <div className="flex">
          <div className="w-4/12 border-r">
            <ul>
              <li><Link to="/allplace">All Place</Link></li>
              <li><Link to="/editplace">Edit Place</Link></li>
            </ul>
          </div>
          <div className="w-8/12">
            <SearchPlace />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;