import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";
import { IGetIpLocation } from "../../store/types/ipLocation";

type Props = {
  ipLocation: IGetIpLocation | undefined;
};

const Header = ({ ipLocation }: Props) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          {ipLocation?.city}, {ipLocation?.country}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
