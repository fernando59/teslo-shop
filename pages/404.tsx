import { Box, Typography } from "@mui/material"
import { ShopLayout } from "../components/layouts"

const Custom404Page = () => {
  return  <>
    <ShopLayout title="Page not found" pageDescription="Page not found">
        <Box display='flex'justifyContent='center' alignItems='center' height='calc(100vh-200px)' sx={{
            flexDirection:{xs:'column',md:'row'},
        }}>
            <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}> 404 | </Typography>
            <Typography marginLeft={5} variant='h4' component='h4'  fontWeight={200}>Page not found </Typography>

        </Box>
    </ShopLayout>
  </>
}

export default Custom404Page