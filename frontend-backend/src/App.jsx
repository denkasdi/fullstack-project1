import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyAccount from "./pages/MyAccount";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import ListAll from "./pages/ListAll";
import RegisterStudent from "./pages/RegisterStudent";
import Profile from "./pages/Profile";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/registerstudent",
			element: <RegisterStudent />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/register",
			element: <Register />,
		},
		{
			path: "/my-account",
			element: <MyAccount />,
		},
		{
			path: "/admin",
			element: <Admin />,
		},
		{
			path: "/users",
			element: <Users />,
		},
		{
			path: "/listall",
			element: <ListAll />,
		},
		{
			path: "/Profile",
			element: <Profile />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
