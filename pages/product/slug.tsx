import { Button, Chip, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { ShopLayout } from "../../components/layouts"
import { ProductSizeSelector, ProductSlideShow } from "../../components/products"
import { ItemCounter } from "../../components/ui"
import { initialData } from "../../database/products"

const product = initialData.products[0]
const Slug = () => {
    return (
        <ShopLayout title="Slug" pageDescription="slug">

            <Grid container spacing={3}>
                {/* SlideShow */}
                <Grid item xs={12} sm={7}>
                    <ProductSlideShow images={product.images} />

                </Grid>
                {/* DESCRIPTION */}
                <Grid item xs={12} sm={5}>
                    <Box display='flex' flexDirection='column'>
                        {/* Titles */}
                        <Typography variant='h1' component='h1'>{product.title}</Typography>
                        <Typography variant='subtitle1' component='h2'>$ {product.price}</Typography>
                        {/* Quantity */}
                        <Box sx={{ my: 2 }}>
                            <Typography variant='subtitle2' >{product.inStock}</Typography>
                            {/* ItemCounter */}
                            <ItemCounter/>
                            <ProductSizeSelector  sizes={product.sizes}/>

                        </Box>
                        {/* Add to Cart */}
                        <Button color='secondary' className="circular-btn">
                            Add to Cart
                        </Button>

                        {/* <Chip label="Not avaliebe products" color='error' variant='outline'></Chip> */}

                        {/* Description */}
                        <Box sx={{ mt: 3 }}>
                            <Typography variant='subtitle2'>Description</Typography>
                            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente mollitia beatae, corporis placeat voluptas vitae quisquam repellendus nisi cum temporibus quasi, accusamus ullam tempore quaerat, ducimus blanditiis reiciendis! Nobis!</Typography>

                        </Box>

                    </Box>

                </Grid>


            </Grid>
        </ShopLayout>
    )
}
export default Slug
