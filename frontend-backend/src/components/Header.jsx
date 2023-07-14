import React, { useEffect } from "react";
import useLocalStorage from "../hook/useLocalStorage";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {
	const navigate = useNavigate();
	const [jwt, setJwt] = useLocalStorage("token", "");

	const handleLogoutOut = () => {
		setJwt("");
		navigate("/login");
		location.reload();
	};

	return (
		<div
			style={{
				width: "100%",
				height: "50px",
				backgroundColor: "red",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "1rem",
			}}
		>
			<Logo />
			<div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
				<h4 style={{ color: "white" }}>{user?.username || "no data"}</h4>
				<button onClick={handleLogoutOut}>Logout</button>
			</div>
		</div>
	);
};

export default Header;
