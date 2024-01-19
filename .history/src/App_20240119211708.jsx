import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import SideBar from './components/layout/SideBar';
import Home from './components/pages/Home';
import EmployeeList from './components/employee/EmployeeList';
import AddEmployee from './components/employee/AddEmployee';
import LeaveList from './components/employee/LeaveList';
import LeaveForm from './components/employee/LeaveForm';
import InterviewScheduler from './components/candidates/InterviewScheduler';
import OfferManagement from './components/candidates/OfferManagement';
import JobPostingForm from './components/candidates/JobPostingForm';
import JobApplicationList from './components/candidates/JobApplicationList';


const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Flex>
          <SideBar />
          <Flex flexDirection="column" width="calc(100vw - 250px)"> {/* Adjust the width */}
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/add-employee" element={<AddEmployee />} />
              <Route path="/leaves" element={<LeaveList />} />
              <Route path="/add-leave" element={<LeaveForm />} />
              <Route path="/schedule-interview" element={<InterviewScheduler />} />
              <Route path="/manage-offers" element={<OfferManagement />} />
              <Route path="/job-posting" element={<JobPostingForm />} />
              <Route path="/job-application-list" element={<JobApplicationList />} />
              {/* Add more routes as needed */}
            </Routes>
          </Flex>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
