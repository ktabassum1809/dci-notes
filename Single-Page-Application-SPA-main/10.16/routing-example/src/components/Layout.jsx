import { NavLink, Outlet } from "react-router-dom"

export default function Layout() {
	return (
		<main>
			<ul>
				<li>
					<NavLink to="/weather">Weather</NavLink>
				</li>
				<li>
					<NavLink to="/settings">Settings</NavLink>
				</li>
			</ul>

			<Outlet />
		</main>
	)
}
