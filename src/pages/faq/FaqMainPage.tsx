import {Outlet} from 'react-router-dom';
import {Box} from "@mui/material";
import {FaqMain} from "~/components/faq/FaqMain";

export const FaqMainPage = () => {
	return (
		<>
			<Box sx={{ mt: 8, p: 0, height: "calc(100vh - 64px)" }}>
				<FaqMain/>
			</Box>
			<Outlet />
		</>
	)
};