import { BrowserRouter, Routes, Route } from "react-router-dom";

const MyRoutes = () => {
    return (<BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Landing />}/>
                    <Route path="forgetpassword" element={<Password />}/>
                    <Route path=":id" element={<Layout />}/>
                    <Route path="*" elemment={<NotFound />}/>
                </Route>
            </Routes>
        </BrowserRouter>);
}

export default MyRoutes;
