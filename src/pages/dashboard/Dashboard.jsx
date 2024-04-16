import { DownloadOutlined } from "@mui/icons-material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <div>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome to your Dashboard"}
        />

        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Downloads Reports
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
