import { Box, Typography, useTheme } from "@mui/material"


const NotFound = () => {
  const theme = useTheme()
  return (
    <Box>
      <Typography align="center" variant="h5" color={theme.palette.error.main}>
        There are No Design yet
        <br />
        <br />
        Please Try again......
      </Typography>
    </Box>
  )
}

export default NotFound