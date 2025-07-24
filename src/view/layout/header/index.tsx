import { type FC } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SyncIcon from "@mui/icons-material/Sync";
import LoginIcon from "@mui/icons-material/Login";
import FLex from "../../../components/Flex";
import useThemeMode from "../../../hooks/useThemeMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <AppBar position="static" color="transparent" sx={{ width: "100%" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 64,
          px: 3,
        }}
      >
        {/* Right: Avatar & Name */}
        <FLex gap={1}>
          <Avatar sx={{ width: 40, height: 40 }} />
          <Stack>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              اکستنشن
            </Typography>
          </Stack>
        </FLex>

        {/* Left: Action Buttons */}
        <FLex gap={0.5}>
          <Tooltip title="ورود" placement="bottom" arrow>
            <IconButton color="inherit" aria-label="ورود">
              <LoginIcon sx={{ fontSize: 24 }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="مدیریت" placement="bottom" arrow>
            <IconButton color="inherit" aria-label="مدیریت">
              <AdminPanelSettingsIcon sx={{ fontSize: 24 }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="همگام‌سازی" placement="bottom" arrow>
            <IconButton color="inherit" aria-label="همگام‌سازی">
              <SyncIcon sx={{ fontSize: 24 }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="تنظیمات" placement="bottom" arrow>
            <IconButton color="inherit" aria-label="تنظیمات">
              <SettingsIcon sx={{ fontSize: 24 }} />
            </IconButton>
          </Tooltip>

          <Tooltip
            title={mode === "light" ? "تاریک کن" : "روشن کن"}
            placement="bottom"
            arrow
          >
            <IconButton onClick={toggleMode} sx={{ ml: 2 }}>
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip>
        </FLex>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
