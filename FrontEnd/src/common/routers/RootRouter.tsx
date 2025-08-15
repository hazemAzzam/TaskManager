import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import TaskRouters from "../../modules/tasks/routers/TaskRouters";
import Dashboard from "../pages/Dashboard";
import AnalyticsPage from "../pages/AnalyticsPage";
import LoginPage from "../../modules/auth/pages/LoginPage";
import SignupPage from "../../modules/auth/pages/SignUpPage";
import { ROUTES } from "../constants/routes";
import UsersRouters from "../../modules/user/routers/UsersRouters";

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.TASKS} element={<TaskRouters />} />
          <Route path={ROUTES.ANALYTICS} element={<AnalyticsPage />} />
          <Route path={ROUTES.TEAMS} element={<UsersRouters />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
