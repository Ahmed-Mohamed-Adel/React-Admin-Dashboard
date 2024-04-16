import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../pages/pieChart/Pie";
import Bar from "../../pages/barChart/bar";
import Geo from "../../pages/geography/Geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} mt={2} gap={1.5} flexWrap={"wrap"}>
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "28%",
        }}
      >
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px " }}
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenu generated
        </Typography>
        <Typography variant="body2" align="center" px={0.7} pb={3}>
          Includes extra misc expanditures and costs
        </Typography>
      </Paper>
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "33%",
        }}
      >
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px " }}
        >
          Sales Country
        </Typography>

        <Bar isDashboard={true} />
      </Paper>
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "33%",
        }}
      >

        <Geo isDashboard={true}/>
      </Paper>
    </Stack>
  );
};

export default Row3;
