import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Password from "./pages/Landing/Password";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";

import { default as UserDashboard } from "./pages/User/Dashboard";
import Database from "./pages/User/Database";
import Honor from "./pages/User/Honor";
import School from "./pages/User/School";
import Student from "./pages/User/Student";
import Profile from "./pages/User/Profile";

import { default as AdminDashboard } from "./pages/Admin/Dashboard";
import Log from "./pages/Admin/Log";
import Management from "./pages/Admin/Management";

const MyRoutes = () => {
    return (<BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Landing />}/>
                    <Route path="forgetpassword" element={<Password />}/>
                    <Route path=":id/" element={<Layout />}>
                        <Route index element={<UserDashboard />}/>
                        <Route path="database" element={<Database />}/>
                        <Route path="honor" element={<Honor />}/>
                        <Route path="school" element={<School />}/>
                        <Route path="student" element={<Student />}/>
                        <Route path="profile" element={<Profile />}/>
                        <Route path="admin/">
                            <Route index element={<AdminDashboard />}/>
                            <Route path="log" element={<Log />}/>
                            <Route path="management" element={<Management />}/>
                            <Route path="*" element={<NotFound />}/>
                        </Route>
                        <Route path="*" element={<NotFound />}/>
                    </Route>
                    <Route path="*" elemment={<NotFound />}/>
                </Route>
            </Routes>
        </BrowserRouter>);
}

export default MyRoutes;
