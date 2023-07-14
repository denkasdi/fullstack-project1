import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import logo from "../assets/images/pixel-art-1667423236.png";

const Home = () => {
	const navigate = useNavigate();
	const handleNavigate = (path) => {
		navigate(path);
	};
	return (
		<div style={{ height: "100vh", width: "100vw" }}>
			<div
				style={{
					width: "100%",
					height: "80px",
					backgroundColor: "black",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "1rem",
				}}
			>
				<Logo />

				<div style={{ display: "flex", gap: "4px" }}></div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					height: "400px",
					justifyContent: "center",
					alignItems: "center",
					gap: 10,
				}}
			>
				<img
					src={logo}
					style={{ marginBottom: -150, height: 800, width: 900 }}
				/>
				<h1>Welcome to CariCikgu.App</h1>

				<button onClick={() => handleNavigate("registerstudent")}>
					I'm a Student
				</button>
				<button onClick={() => handleNavigate("register")}>
					I Want to Teach
				</button>
				<button onClick={() => handleNavigate("Profile")}>Dummy</button>
			</div>
		</div>
	);
};

export default Home;
