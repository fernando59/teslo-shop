import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material"
import { CartList, OrderSummary } from "../../components/cart"
import { ShopLayout } from "../../components/layouts"
import NextLink from 'next/link'

const SummanryPage = () => {
    return (
        <ShopLayout title="Summary Page" pageDescription="Summary Page">
            <Typography variant='h1' component='h1'>Summary Order</Typography>
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
                                <Button color='secondary' className="circular-btn" fullWidth>
                                    Confirm Order
                                </Button>

                            </Box>
                        </CardContent>

                    </Card>
                </Grid>

            </Grid>
        </ShopLayout>
    )
}

export default SummanryPage