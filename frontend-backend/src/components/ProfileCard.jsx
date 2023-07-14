import React from "react";
import dp from "../assets/images/teacher.png";

const ProfileCard = () => {
	return (
		// <div
		// 	style={{
		// 		display: "flex",
		// 		width: "30vh",
		// 		height: "60vh",
		// 		flexDirection: "column",
		// 		justifyContent: "center",
		// 		alignItems: "center",
		// 		backgroundColor: "whitesmoke",
		// 		borderRadius: 20,
		// 		borderWidth: 5,
		// 		borderColor: "red",
		// 	}}
		// >

		// </div>

		<div
			style={{
				backgroundColor: "#fff",
				borderRadius: "8px",
				padding: "32px",
				display: "flex",
				flexDirection: "column",
				flexWrap: "wrap",
				justifyContent: "center",
				alignItems: "center",
				width: "30%",
				height: "50vh",
				textAlign: "center",
				gap: 10,
				marginTop: 20,
				marginBottom: 20,
				boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
			}}
		>
			<h2>Name Here</h2>
			<p>Subjek</p>
			<img src={dp} style={{ width: 100, height: 100 }} />
			<h1>Name</h1>
			<p>Title & Job</p>
			<p>University</p>
			<p>SPM Results</p>
			<p>
				Saya seorang cikgu tuisyen SPM dengan pengalaman dan pengetahuan yang
				luas dalam membantu pelajar mencapai kejayaan akademik. Saya memiliki
				latar belakang pendidikan yang kukuh dan mempunyai komitmen untuk
				memberikan bimbingan yang berkualiti kepada pelajar SPM.
			</p>
			<div>
				<a href="">Socmed</a>
			</div>
			<p>
				<button>Contact</button>
			</p>
		</div>
	);
};

export default ProfileCard;
