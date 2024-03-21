import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import {NoticeMain} from "~/components/notice/NoticeMain";

export const NoticeMainPage = () => {
	return (
		<>
			<Box sx={{ mt: 8, p: 0, height: "calc(100vh - 64px)" }}>
				<NoticeMain/>
			</Box>
			<Outlet />
		</>
	)
};