import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material"
import { CartList, OrderSummary } from "../../components/cart"
import { ShopLayout } from "../../components/layouts"
import NextLink from 'next/link'
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material"

const SummaryPage = () => {
    return (
        <ShopLayout title="Summary Page" pageDescription="Summary Page">
            <Typography variant='h1' component='h1'>Order : ABC 123</Typography>

            {/* <Chip sx={{my:2}} label='Pending Checkout' variant='outlined' color='error' icon={<CreditCardOffOutlined/>}/> */}
            <Chip sx={{ my: 2 }} label='Order Paid' variant='outlined' color='success' icon={<CreditScoreOutlined />} />
            <Grid container>
                <Grid item xs={12} sm={7}>
                    {/* Cart List */}
                    <CartList isEditable={false} />

                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant='h2'>Summary (3 items)</Typography>
                            <Divider sx={{ my: 1 }} />
                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant='subtitle1'>Direction Delivery</Typography>
                                <NextLink href='/checkout/address' passHref>
                                    <Link underline="always">Edit </Link>

                                </NextLink>
                            </Box>
                            <Typography >Fernando Mercado</Typography>
                            <Typography >323 Somewhere location</Typography>
                            <Typography >Stittiville, HYA 233 </Typography>
                            <Typography >Bolivia</Typography>
                            <Typography >+591 789899878</Typography>

                            <Divider sx={{ my: 1 }} />
                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/cart' passHref>
                                    <Link underline="always">Edit </Link>

                                </NextLink>
                            </Box>
                            {/* Order Summary */}
                            <OrderSummary />


                            <Box sx={{ mt: 3, }}>
                                {/* TODO */}
                                <h1>Pagar</h1>

                                <Chip sx={{ my: 2 }} label='Order Paid' variant='outlined' color='success' icon={<CreditScoreOutlined />} />

                            </Box>
                        </CardContent>

                    </Card>
                </Grid>

            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage