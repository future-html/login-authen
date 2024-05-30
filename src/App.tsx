import React from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/register"
					element={<Register />}
				></Route>
				<Route
					path="/login"
					element={<Login />}
				></Route>
				<Route
					path="/"
					element={<Home />}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
