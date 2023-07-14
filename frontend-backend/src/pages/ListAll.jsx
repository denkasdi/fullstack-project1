import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import useLocalStorage from "../hook/useLocalStorage";
import { HOST } from "../api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pluralize from "pluralize";

const ListAll = () => {
	const [user] = useLocalStorage("userData", null);
	const [jwt] = useLocalStorage("token", "");
	const [users, setUsers] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const navigate = useNavigate();
	const fetchAllUser = () => {
		//   change loading state to true
		setLoading(true);

		// get jwt from localStorage
		console.log(jwt);

		// run get api
		axios
			.get(`${HOST}/api/users`, {
				headers: { Authorization: `Bearer ${jwt}` },
			})
			.then(function (response) {
				// handle success
				console.info(response.data.data);
				setUsers(response.data.data);
			})
			.catch(function (error) {
				// handle error
				console.error(error);
				if (error.response.status === 401) {
					navigate("login");
				}
			})
			.finally(function () {
				setLoading(false);
			});
	};
	useEffect(() => {
		fetchAllUser();
	}, []);

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
				<h1>
					{users.length} registered {pluralize("user", users.length)}
				</h1>
				<div style={{ width: "100%", maxWidth: "400px" }}>
					{isLoading ? (
						<p
							style={{ width: "100%", textAlign: "center", marginTop: "3rem" }}
						>
							Loading users data...
						</p>
					) : (
						users.map((user, index) => <UserCard key={index} user={user} />)
					)}
				</div>
			</div>
		</div>
	);
};

const UserCard = ({ user }) => {
	const [jwt] = useLocalStorage("token", "");
	const [isLoading, setLoading] = useState(false);
	const navigate = useNavigate();
	// fetch information from api/users/download/id
	const handleClickUser = () => {
		setLoading(true);
		// run get api
		axios
			.get(`${HOST}/api/users/download/${user.id}`, {
				headers: { Authorization: `Bearer ${jwt}` },
			})
			.then(function (response) {
				// handle success
				console.info(response.data.data);
			})
			.catch(function (error) {
				// handle error
				console.error(error);
				if (error.response.status === 401) {
					navigate("login");
				}
			})
			.finally(function () {
				setLoading(false);
			});
	};
	return (
		<div
			style={{
				position: "relative",
				borderStyle: "solid",
				borderColor: "gray",
				borderRadius: "0.5rem",
				padding: "1rem",
				marginTop: "1rem",
			}}
		>
			<button
				onClick={handleClickUser}
				style={{
					unset: "all",
					position: "absolute",
					right: "1rem",
					top: "1rem",
					borderStyle: "solid",
					borderColor: "gray",
					borderRadius: "0.3rem",
					padding: "0.3rem",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					cursor: "pointer",
				}}
			>
				{isLoading ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						style={{
							height: "1.2rem",
							width: "1.2rem",
							animation: "rotate 2s infinite linear",
						}}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						style={{ height: "1.2rem", width: "1.2rem" }}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
						/>
					</svg>
				)}
			</button>
			<div>
				<p>Username</p>
				<p style={{ display: "inline", fontWeight: "bold" }}>
					{user?.username || "no data"}
				</p>
			</div>
			<div style={{ marginTop: "1rem" }}>
				<p>Email</p>
				<p style={{ display: "inline", fontWeight: "bold" }}>
					{user?.email || "no data"}
				</p>
			</div>
			<div style={{ marginTop: "1rem" }}>
				<p>Date registered</p>
				<p style={{ display: "inline", fontWeight: "bold" }}>
					{user?.created_at}
				</p>
			</div>
		</div>
	);
};

export default ListAll;
