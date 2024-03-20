import { Outlet} from "react-router-dom";
import { Box } from "@mui/material";
import { BulletinMain } from "~/components/bulletin/BulletinMain";

export const BulletinMainPage = () => {
  return (
    <>
      <Box sx={{ mt: 8, p: 0, height: "calc(100vh - 64px)" }}>
        <BulletinMain />
      </Box>
      <Outlet />
    </>
  );
};
