import { NavLink, Outlet } from "react-router-dom"

export default function Layout() {
	return (
		<>
			<h1>Welcome to my page</h1>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/products">Products</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact us</NavLink>
					</li>
					<li>
						<NavLink to="/users">Users</NavLink>
					</li>
					<li>
						<NavLink to="/users/new">Registration</NavLink>
					</li>
				</ul>
			</nav>

			<main>
				{/* routes content will go here, Outlet is a placeholder */}
				<Outlet />
			</main>
		</>
	)
}
