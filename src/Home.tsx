import React, { useEffect, useState } from "react";

interface User {
	_id: string;
	username: string;
	email: string;
	password: string;
	__v: number;
}

function Home() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		fetch("http://localhost:3001/register")
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<div>Welcome </div>
			<div>
				<h2>Registered Users:</h2>
				<ul>
					{users.map((user) => (
						<li key={user._id}>
							{user.username} ({user.email})
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Home;
