import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import useLocalStorage from "../hook/useLocalStorage";
import { HOST } from "../api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pluralize from "pluralize";
import maleteacherImage from "../assets/images/teacher.png";
import femaleteacherImage from "../assets/images/female_teacher.png";

const Users = () => {
	const [user] = useLocalStorage("userData", null);
	const [jwt] = useLocalStorage("token", "");
	const [users, setUsers] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const teacherimage = femaleteacherImage;

	//if (user)

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
				//console.info(response.data.data);
				//console.log(user);
				setUsers(response.data.data);

				//console.log(usernames);
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
		<div>
			<Header user={user} />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					height: "100vh",
					width: "100%",
					justifyContent: "space-between",
					borderWidth: 5,
					borderColor: "black",
					backgroundColor: "aqua",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						height: "100vh",
						width: "100%",
						alignItems: "center",
						padding: "3rem",
						backgroundColor: "white",
					}}
				>
					Search
					{/* <h1>-CariCikgu.App-</h1> */}
					<div
						style={{
							width: "100%",
							maxWidth: "400px",
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gridGap: "1rem",
							justifyItems: "center",
						}}
					>
						{isLoading ? (
							<p
								style={{
									width: "100px",
									textAlign: "center",
									marginTop: "3rem",
								}}
							>
								Loading users data...
							</p>
						) : (
							users.map((user, index) => <UserCard key={index} user={user} />)
						)}
					</div>
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

	// console.log(user?.sex);
	// console.log("testttttttttttt");
	// const emails = user.map((user) => user.email);
	// console.log(emails);
	const [hover, setHover] = useState(false);
	const handleMouseEnter = () => {
		setHover(true);
	};

	const handleMouseLeave = () => {
		setHover(false);
	};

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
				display: "flex",
				flexWrap: "wrap",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
				borderStyle: "solid",
				borderColor: "black",
				borderRadius: 5,
				padding: "1rem",
				marginTop: "1rem",
				margin: "1rem",
				backgroundColor: hover ? "#F0F8FF" : "whitesmoke",
				width: "100%",
			}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div>
				{user?.sex === "Male" && (
					<img
						src={maleteacherImage}
						alt=""
						style={{
							width: 90,
							height: 90,
						}}
					/>
				)}
				{user?.sex === "Female" && (
					<img
						src={femaleteacherImage}
						alt=""
						style={{
							width: 90,
							height: 90,
						}}
					/>
				)}
			</div>
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

			{/* <div style={{ marginTop: "1rem" }}>
				<p>Sex</p>
				<p style={{ display: "inline", fontWeight: "bold" }}>
					{user?.sex || "no data"}
				</p>
			</div> */}

			<div style={{ marginTop: "1rem" }}>
				<p>Location</p>
				<p style={{ display: "inline", fontWeight: "bold" }}>{user?.lokasi}</p>
			</div>

			<div style={{ marginTop: "1rem" }}>
				<p>Phone No</p>
				<p style={{ display: "inline", fontWeight: "bold" }}>{user?.phone}</p>
			</div>

			<div style={{ marginTop: "1rem" }}>
				<p>SPM Results</p>
				<p style={{ display: "inline", fontWeight: "bold" }}>
					{user?.result_spm}
				</p>
			</div>

			<div style={{ marginTop: "1rem" }}>
				<p>Expertise</p>
				<p style={{ display: "inline", fontWeight: "bold" }}>{user?.subjek}</p>
			</div>

			{/* <div style={{ marginTop: "1rem" }}>
				<p>About Me</p>
				<p style={{ display: "inline", fontWeight: "bold" }}>{user?.aboutme}</p>
			</div> */}

			<div style={{ marginTop: "1rem" }}>
				<button>Contact ME</button>
			</div>
		</div>
	);
};

export default Users;
