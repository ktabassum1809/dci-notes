import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Products from "./components/Products"
import Contact from "./components/Contact"
import UserList from "./components/UserList"
import UserRegistration from "./components/UserRegistration"
import NotFound from "./components/NotFound"

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="products" element={<Products />} />
					<Route path="contact" element={<Contact />} />

          <Route path="discount-2021" element={<Navigate to="/products" replace />} />

					<Route path="users">
						<Route index element={<UserList />} />
						<Route path="new" element={<UserRegistration />} />
					</Route>

          <Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
