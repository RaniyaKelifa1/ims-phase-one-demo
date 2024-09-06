import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './InitialPages/dashboard';
import AddContactPerson from './InsuredUsers/addperson'; // Adjust the path as necessary
import AddOrganization from './InsuredUsers/addorg';
import AddAddress from './InsuredUsers/addAddress';
import DemoViewPage from './InsuredUsers/demoview';
import DemoCViewPage from './InsuredUsers/democlientview';
import LoginPage from './InitialPages/loginpage';


function App() {
  return (
  
    <Router>
    
      
      <Routes>
        
      <Route path="/" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="addperson" element={<AddContactPerson />} />
          <Route path="addorganization" element={<AddOrganization />} />
          <Route path="addaddress" element={<AddAddress />} />
          <Route path="demoview" element={<DemoViewPage />} />
          <Route path="clientview" element={<DemoCViewPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
