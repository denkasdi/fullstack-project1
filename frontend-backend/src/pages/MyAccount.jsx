import React, { useState } from "react";
import { useEffect } from "react";
import useLocalStorage from "../hook/useLocalStorage";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { HOST } from "../api";
import Header from "../components/Header";

const MyAccount = () => {
	const [jwt, setJwt] = useLocalStorage("token", "");
	const [isAdmin, setAdmin] = useLocalStorage("isAdmin", false);
	const [user, setUser] = useLocalStorage("userData", null);
	const navigate = useNavigate();
	const handleNavigateToLogin = () => {
		navigate("/login");
	};
	const fetchUserAccount = () => {
		// get jwt from localStorage
		console.log(jwt);

		// run get api
		axios
			.get(`${HOST}/private`, {
				headers: { Authorization: `Bearer ${jwt}` },
			})
			.then(function (response) {
				// handle success
				//console.info(response.data);
				setUser(response.data.user);
				console.log(response.data.user);
				setAdmin("setadmin" + response.data.user.isAdmin);
			})
			.catch(function (error) {
				// handle error
				console.error(error);
				handleNavigateToLogin();
			})
			.finally(function () {
				// always executed
			});
	};

	useEffect(() => {
		fetchUserAccount();
	}, [jwt]);

	return (
		<div style={{ height: "100vh", width: "100vw" }}>
			<Header user={user} />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					height: "400px",
					alignItems: "center",
					padding: "3rem",
				}}
			>
				<h1>Welcome back</h1>
				<div style={{ width: "100%", maxWidth: "400px" }}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: "3rem",
						}}
					>
						<h3>User information</h3>
						{isAdmin && <Link to="/users">See all users</Link>}
					</div>
					<div
						style={{
							borderStyle: "solid",
							borderColor: "gray",
							borderRadius: "0.5rem",
							padding: "1rem",
							marginTop: "1rem",
						}}
					>
						<div>
							<p>Username</p>
							<p style={{ display: "inline", fontWeight: "bold" }}>
								{user?.username || "no data"}
							</p>
							{isAdmin && <AdminControl />}
						</div>
						<div style={{ marginTop: "1rem" }}>
							<p>Email</p>
							<p style={{ display: "inline", fontWeight: "bold" }}>
								{user?.email || "no data"}
							</p>
							{isAdmin && <AdminControl />}
						</div>
						<div style={{ marginTop: "1rem" }}>
							<p>Location</p>
							<p style={{ display: "inline", fontWeight: "bold" }}>
								{user?.lokasi || "no data"}
							</p>
						</div>
						<div style={{ marginTop: "1rem" }}>
							<p>Phone</p>
							<p style={{ display: "inline", fontWeight: "bold" }}>
								{user?.phone || "no data"}
							</p>
							{isAdmin && <AdminControl />}
						</div>
						<div style={{ marginTop: "1rem" }}>
							<p>SPM Results</p>
							<p style={{ display: "inline", fontWeight: "bold" }}>
								{user?.result_spm || "no data"}
							</p>
							{isAdmin && <AdminControl />}
						</div>
						<div style={{ marginTop: "1rem" }}>
							<p>Admin status</p>
							<p style={{ display: "inline", fontWeight: "bold" }}>
								{user?.isAdmin ? "True" : "False"}
							</p>
							{isAdmin && <AdminControl />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const AdminControl = () => {
	return (
		<div style={{ display: "inline", marginLeft: "1rem" }}>
			<span
				style={{
					textDecoration: "underline",
					color: "blue",
					cursor: "pointer",
				}}
			>
				Edit
			</span>
			<span
				style={{
					textDecoration: "underline",
					marginLeft: "0.5rem",
					color: "red",
					cursor: "pointer",
				}}
			>
				Delete
			</span>
		</div>
	);
};

export default MyAccount;
