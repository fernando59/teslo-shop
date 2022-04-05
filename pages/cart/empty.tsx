import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { Typography, Box, Link } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import NextLink from 'next/link'

const EmptyPage = () => {
    return (
        <ShopLayout title="Cart Empty" pageDescription="Cart Empty">

            <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh-200px)' sx={{
                flexDirection: { xs: 'column', md: 'row' },
            }}>
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box display='flex' flexDirection='column' alignItems='center'>

                    <Typography>Your Cart is Empty</Typography>
                    <NextLink href='/' passHref>

                        <Link typography='h4' color='primary'>
                            Return
                        </Link>
                    </NextLink>

                </Box>

            </Box>
        </ShopLayout>
    )
}

export default EmptyPage