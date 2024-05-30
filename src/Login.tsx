import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
	const [inputUser, setInputUser] = useState({ email: "", password: "" });
	const navigate = useNavigate();

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		axios
			.post("http://localhost:3001/login", inputUser)
			.then((res) => {
				if (res.data === "success") {
					navigate("/");
				}
			})
			.catch((err) => {
				console.error(err.message);
			});
	};

	return (
		<div className="background flex items-center justify-center min-h-screen">
			<svg viewBox="0 0 1440 320">
				<path
					fill="rgba(255, 255, 255, 0.7)"
					fillOpacity="1"
					d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				></path>
			</svg>
			<div className="relative bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full z-10">
				<h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							value={inputUser.email}
							onChange={(e) => {
								setInputUser((prev) => {
									return { ...prev, [e.target.name]: e.target.value };
								});
							}}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							required
							value={inputUser.password}
							onChange={(e) => {
								setInputUser((prev) => {
									return { ...prev, [e.target.name]: e.target.value };
								});
							}}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
						/>
					</div>
					<div className="flex items-center mb-4">
						<input
							type="checkbox"
							id="rememberMe"
							name="rememberMe"
							className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
						/>
						<label
							htmlFor="rememberMe"
							className="ml-2 block text-sm text-gray-900"
						>
							Remember me
						</label>
					</div>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
					>
						Sign In
					</button>
				</form>
				<p className="mt-6 text-center text-sm text-gray-600">
					Don't have an account?{" "}
					<a
						href="/register"
						className="text-pink-600 hover:text-pink-500"
					>
						Register
					</a>
				</p>
			</div>
		</div>
	);
}

export default Login;
