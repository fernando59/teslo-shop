import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { initialData } from "../../database/products"
import NextLink from 'next/link'
import { ItemCounter } from "../ui"
import { FC } from "react"

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]
interface Props {
    isEditable:boolean
}
export const CartList:FC<Props> = ({isEditable}) => {
    return (
        <>
            {
                productsInCart.map((product, index) => (
                    <Grid container key={product.slug} spacing={2} sx={{mb:1}}>
                        <Grid item xs={3}>
                            <NextLink href='/products/slug' passHref>
                                <Link>
                                    <CardActionArea>
                                        <CardMedia
                                            image={`/products/${product.images[0]}`}
                                            component='img'
                                            sx={{borderRadius:'5px'}}
                                        />

                                    </CardActionArea>
                                </Link>

                            </NextLink>
                        </Grid>

                        <Grid item xs={7}>
                            <Box display='flex' flexDirection='column'>
                                <Typography variant='body1'>{product.title}</Typography>
                                <Typography variant='body1'>Size : <strong>M</strong></Typography>
                                {
                                    isEditable
                                    ? <ItemCounter/>
                                    : <Typography variant="h5">3 Items</Typography>
                                }

                            </Box>
                        </Grid>

                        <Grid item xs={2}>
                            <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                                <Typography variant="subtitle1">${product.price}</Typography>
                                {
                                    isEditable && <Button color='secondary' variant='text'> Remove </Button>
                                }

                            </Grid>
                        </Grid>

                    </Grid>
                ))
            }

        </>

    )
}
