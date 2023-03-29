import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import LoginRegister from "../views/LoginRegister.jsx";
import HomePage from "../views/HomePage.jsx";
import JobDetailPage from "../views/JobDetailPage.jsx";
import NotFoundPage from "../views/NotFoundPage.jsx";

const loginRequiredLoader = () => {
	if (!localStorage.access_token) {
		return redirect("/login");
	}
	return null;
};

const logoutRequiredLoader = () => {
	if (localStorage.access_token) {
		return redirect("/");
	}
	return null;
};

const router = createBrowserRouter([
	{
		path: "/login",
		loader: logoutRequiredLoader,
		element: <LoginRegister />,
	},
	{
		element: <Layout />,
		loader: loginRequiredLoader,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/job-detail/:Jobid",
				element: <JobDetailPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);

export default router;
