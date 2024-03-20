import { Outlet} from "react-router-dom";
import { Box } from "@mui/material";
import { BulletinMain } from "~/components/bulletin/BulletinMain";

export const IndexPage = () => {
  return (
    <>
      <Box sx={{ mt: 8, p: 0, height: "calc(100vh - 64px)" }}>
        <BulletinMain />
      </Box>
      <Outlet />
    </>
  );
};
