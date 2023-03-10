import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";

import { default as UserDashboard } from "./pages/User/Dashboard";
import Database from "./pages/User/Database";
import Honor from "./pages/User/Honor";
import School from "./pages/User/School";
import Student from "./pages/User/Student";
import Profile from "./pages/User/Profile";
import { default as UserHelp } from "./pages/User/Help";

import { default as AdminDashboard } from "./pages/Admin/Dashboard";
import Log from "./pages/Admin/Log";
import Management from "./pages/Admin/Management";
import { default as AdminHelp } from "./pages/Admin/Help";
import HonorStat from "pages/User/HonorStat";
import Status from "pages/User/Status";
import Register from "pages/Register";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="user/:id/" element={<Layout />}>
            <Route index element={<UserDashboard />} />
            <Route path="database" element={<Database />} />
            <Route path="honor" element={<Honor />} />
            <Route path="school" element={<School />} />
            <Route path="student" element={<Student />} />
            <Route path="honorStat" element={<HonorStat />} />
            <Route path="status" element={<Status />} />
            <Route path="profile" element={<Profile />} />
            <Route path="help" element={<UserHelp />} />
            <Route path="admin/">
              <Route index element={<AdminDashboard />} />
              <Route path="log" element={<Log />} />
              <Route path="management" element={<Management />} />
              <Route path="help" element={<AdminHelp />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
