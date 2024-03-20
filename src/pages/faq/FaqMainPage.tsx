import {Outlet} from 'react-router-dom';
import {Box} from "@mui/material";

export const FaqMainPage = () => {
	return (
		<>
			<Box sx={{ mt: 8, p: 0, height: "calc(100vh - 64px)" }}>

			</Box>
			<Outlet />
		</>
	)
};