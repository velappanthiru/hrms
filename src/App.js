import { Route, Routes } from "react-router-dom";
import Layout from './components/groupComponent/layout';
import { Attendance, Dashboard, MyLeave, Team } from './route';
import Providers from "./components/contentApi/Providers";
import Login from "./page/auth/Login";
import ForgetPassword from "./page/auth/ForgetPassword";

function App() {
  return (
    <>
      <Providers>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/v1" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="leaves" element={<MyLeave />} />
            <Route path="teams" element={<Team />} />
          </Route>
        </Routes>
      </Providers>
    </>
  );
}

export default App;
