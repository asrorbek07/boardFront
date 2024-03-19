import {useEffect, useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {Box} from "@mui/material";
import {BulletinMain} from "~/components/bulletin/BulletinMain";
import {BulletinBoardPage} from "~/pages/bulletin/bulletinBoard/BulletinBoardPage";

export const IndexPage = () => {
	return(
			<Box sx={{mt: 8, p:0, height:'calc(100vh - 64px)'}}>
				<BulletinMain/>
			</Box>

	) ;



};