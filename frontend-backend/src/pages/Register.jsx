import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useLocalStorage from "../hook/useLocalStorage";
import { HOST } from "../api";
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";
import subjectList from "../components/subjectList";

const Register = () => {
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

	const handleRoleChangeStudent = (event) => {
		setRole(event.target.value);
		//backgroundkalerTeacher = "black";
	};
	const handleRoleChangeTeacher = (event) => {
		setRole(event.target.value);
		//backgroundkalerTeacher = "black";
	};

	const handleSucesssNavigation = () => {
		navigate("/my-account");
	};

	var [value, setValue] = useState("");
	var [subjek, setSubjek] = useState("");

	function handleselectevent(event) {
		setValue(event.target.value);
	}

	function handleselecteventSubjek(event) {
		setSubjek(event.target.value);
	}

	console.log("den");
	//console.log(setSelectedSex);

	const handleSubmit = (event) => {
		event.preventDefault();
		const email = event.target[0].value;
		const username = event.target[1].value;
		const password = event.target[2].value;
		const passwordConfirmation = event.target[3].value;
		const lokasi = event.target[5].value;
		const phone = event.target[6].value;
		const result_spm = event.target[7].value;
		subjek = event.target[8].value;
		const aboutme = event.target[9].value;
		var sex = value;
		sex = event.target[4].value;
		//var sex = event.target[8].value;
		//sex = value;
		console.log(sex);
		//console.log(options.value[0]);

		const formObject = {
			email: email,
			username: username,
			password: password,
			password_confirmation: passwordConfirmation,
			lokasi: lokasi,
			phone: phone,
			result_spm: result_spm,
			aboutme: aboutme,
			subjek: subjek,
			sex: sex,
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
			.post(`${HOST}/api/register`, formObject)
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
				<h1>Let's Make Someone to be Smarter Than You</h1>
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
							marginBottom: 0,
						}}
					>
						<label
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "0.5rem",
								marginTop: 0,
								marginBottom: -15,
							}}
						>
							Sex
						</label>
						<select
							style={{
								display: "flex",
								flexDirection: "row",
								gap: "0.5rem",
								marginTop: "1rem",
								marginBottom: -5,
								height: 35,
								textAlign: "center",
								color: "gray",
								alignContent: "center",
								justifyContent: "center",
								alignItems: "center",
								fontSize: 16,
								borderStyle: "solid",
								borderWidth: 3,
								borderRadius: 4,
							}}
							onChange={handleselectevent}
						>
							{option.map((option) => (
								<option style={{}} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</div>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "0.5rem",
							marginTop: "1rem",
						}}
					>
						<label htmlFor="lokasi">Location</label>
						<input id="lokasi" type="text" />
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
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "0.5rem",
							marginTop: "1rem",
						}}
					>
						<label htmlFor="result_spm">SPM Results</label>
						<input id="result_spm" type="text" />
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "0.5rem",
							marginTop: "1rem",
							marginBottom: 0,
						}}
					>
						<label
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "0.5rem",
								marginTop: 0,
								marginBottom: -15,
							}}
						>
							Subjek
						</label>
						<select
							style={{
								display: "flex",
								flexDirection: "row",
								gap: "0.5rem",
								marginTop: "1rem",
								marginBottom: -5,
								height: 35,
								textAlign: "center",
								color: "gray",
								alignContent: "center",
								justifyContent: "center",
								alignItems: "center",
								fontSize: 16,
								borderStyle: "solid",
								borderWidth: 3,
								borderRadius: 4,
							}}
							onChange={handleselecteventSubjek}
						>
							{subjectList.map((subjectList) => (
								<option style={{}} value={subjectList.value}>
									{subjectList.label}
								</option>
							))}
						</select>
						<p>{value}</p>
					</div>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "0.5rem",
							marginTop: "1rem",
						}}
					>
						<label htmlFor="aboutme">Describe Yourself!</label>
						<textarea
							style={{
								height: 200,
								textAlign: "start",
								justifyContent: "start",
								alignContent: "start",
								alignItems: "start",
								whiteSpace: "pre-wrap", // Allows line breaks within the textarea
								wordWrap: "break-word",
							}}
							id="aboutme"
							type="text"
						/>
					</div>

					<button
						type="submit"
						style={{
							backgroundColor: "#171A21",
							color: "white",
							marginTop: "1rem",
							width: "100%",
							marginBottom: 150,
						}}
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
