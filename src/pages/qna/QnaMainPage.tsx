import {Outlet} from 'react-router-dom';
import {Box} from "@mui/material";
import {QnaMain} from "~/components/qna/QnaMain";

export const QnaMainPage = () => {
	return (
		<>
			<Box sx={{ mt: 8, p: 0, height: "calc(100vh - 64px)" }}>
				<QnaMain/>
			</Box>
			<Outlet />
		</>
	)
};
