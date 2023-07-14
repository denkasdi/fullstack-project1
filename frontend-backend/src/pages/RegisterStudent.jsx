import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useLocalStorage from "../hook/useLocalStorage";
import { HOST } from "../api";
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";
import subjectList from "../components/subjectList";

const RegisterStudent = () => {
	const [isLoading, setLoading] = useState(false);
	const [jwt, setJwt] = useLocalStorage("token", "");
	const navigate = useNavigate();
	const backgroundkalerStudent = "white";
	const backgroundkalerTeacher = "white";
	const [role, setRole] = useState("");

	const option = [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	];

	const handleSucesssNavigation = () => {
		navigate("/my-account");
	};

	var [value, setValue] = useState("");
	var [subjek, setSubjek] = useState("");

	console.log("den");
	//console.log(setSelectedSex);

	const handleSubmit = (event) => {
		event.preventDefault();
		const email = event.target[0].value;
		const username = event.target[1].value;
		const password = event.target[2].value;
		const passwordConfirmation = event.target[3].value;
		const phone = event.target[4].value;
		var isMurid = true;
		isMurid = event.target[5].value;
		//var sex = event.target[8].value;
		//sex = value;
		//console.log(options.value[0]);

		const formObject = {
			email: email,
			username: username,
			password: password,
			password_confirmation: passwordConfirmation,
			phone: phone,
			isMurid: true,
		};
		console.log(formObject);

		// send formObject to api
		// setLoading(true);
		// // async function then = Promise:resolved, catch = Promise:reject, finally = Promise:fetched
		// axios
		// 	.post(`${HOST}/api/register`, {
		// 		email,
		// 		username,
		// 		password,
		// 		passwordConfirmation,
		// 	})
		// 	.then(function (response) {
		// 		console.info(response.data);
		// 		// navigate to my account page when success
		// 		setJwt(response.data.jwt);
		// 		handleSucesssNavigation();
		// 	})
		// 	.catch(function (error) {
		// 		console.error(error.response.data);

		// 	})
		// 	.finally(function () {
		// 		setLoading(false);
		// 	});

		// Send formObject to API using axios
		axios
			.post(`${HOST}/api/registerstudent`, formObject)
			.then((response) => {
				// Handle success response
				console.log(response.data);
				//setJwt(response.data.jwt);
				handleSucesssNavigation();
			})
			.catch((error) => {
				// Handle error response
				console.error(error + "roko");
			});
	};

	return (
		<div style={{ height: "100vh", width: "100vw" }}>
			<div
				style={{
					width: "100%",
					height: "80px",
					backgroundColor: "#171A21",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "1rem",
				}}
			>
				<Logo />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					height: "400px",
					alignItems: "center",
					padding: "3rem",
				}}
			>
				<h1>Be Smarter with Us!</h1>
				<form
					style={{ width: "100%", maxWidth: "400px" }}
					onSubmit={handleSubmit}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "0.5rem",
							marginTop: "3rem",
						}}
					>
						<label htmlFor="email">Email</label>
						<input id="email" type="text" />
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "0.5rem",
							marginTop: "1rem",
						}}
					>
						<label htmlFor="username">Username</label>
						<input id="username" type="text" />
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "0.5rem",
							marginTop: "1rem",
						}}
					>
						<label htmlFor="password">Password</label>
						<input id="password" type="password" />
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "0.5rem",
							marginTop: "1rem",
						}}
					>
						<label htmlFor="passwordConfirmation">Repeat password</label>
						<input id="passwordConfirmation" type="password" />
					</div>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "0.5rem",
							marginTop: "1rem",
						}}
					>
						<label htmlFor="phone">Phone No</label>
						<input id="phone" type="text" />
					</div>

					<button
						type="submit"
						style={{
							backgroundColor: "#171A21",
							color: "white",
							marginTop: "1rem",
							width: "100%",
						}}
					>
						Register
					</button>
					<Link
						to="/login"
						style={{
							marginTop: "1rem",
							display: "block",
							width: "100%",
							textAlign: "center",
						}}
					>
						Return as existing user
					</Link>
				</form>
			</div>
		</div>
	);
};

export default RegisterStudent;
