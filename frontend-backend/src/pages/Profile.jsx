import React, { useState } from "react";
import axios from "axios";
import { HOST } from "../api";
import maleteacherImage from "../assets/images/teacher.png";
import femaleteacherImage from "../assets/images/female_teacher.png";

function Profile() {
	const [username, setUsername] = useState("");
	const [userData, setUserData] = useState(null);

	const handleButtonClick = () => {
		axios
			.get(`${HOST}/api/users/${username}`)
			//.get(`${HOST}/api/users/`)
			.then(function (response) {
				console.info("sadasdasdasdad");
				console.log(response.data.serverRes.data);
				setUserData(response.data.serverRes.data);
			})
			.catch(function (error) {
				console.error(error.response.data);
			});
	};

	return (
		<div>
			<input
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<button onClick={handleButtonClick}>Fetch User</button>

			{userData && userData.length > 0 ? (
				<div>
					{userData.map((user, index) => (
						<div key={index}>
							<div>
								{user.sex === "Male" ? (
									<img
										src={maleteacherImage}
										alt=""
										style={{
											width: 90,
											height: 90,
										}}
									/>
								) : (
									<img
										src={femaleteacherImage}
										alt=""
										style={{
											width: 90,
											height: 90,
										}}
									/>
								)}
								<h1>{user.username}</h1>
								<p>Email: {user.email}</p>
								<p>Created At: {user.created_at}</p>
								<p>Subjek: {user.subjek || "-"} </p>
								<p>Sex: {user.sex || "-"} </p>
							</div>
							{/* Render other user data properties as needed */}
						</div>
					))}
				</div>
			) : (
				<p>Enter a username and click the button to fetch user data</p>
			)}
		</div>
	);
}

export default Profile;
