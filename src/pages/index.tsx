import {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {Layout} from "~/layouts";

export const IndexPage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate('/bulletin/');
	}, []);
	return null;
};