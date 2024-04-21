import HeaderLayout from "@commons/components/layouts/Header.layout"
import FooterLayout from "@commons/components/layouts/Footer.layout"
import { Outlet } from "react-router-dom"

function DashboardLayout({ children }) {
	return (
		<>
			<HeaderLayout />
			{children ? children : <Outlet />}
			<FooterLayout />
		</>
	)
}

export default DashboardLayout