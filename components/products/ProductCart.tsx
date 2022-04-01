import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { FC, useMemo, useState } from "react"
import { IProduct } from "../../interfaces"
import NextLink from 'next/link'

interface Props {
    product: IProduct
}

export const ProductCart: FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false)

    const setHoverTrue = () => setIsHovered(true)
    const setHoverFalse = () => setIsHovered(false)
    const productImg = useMemo(() => {
        return isHovered
            ? `products/${product.images[0]}`
            : `products/${product.images[1]}`

    }, [isHovered, product.images])

    return (
        <Grid
            onMouseEnter={setHoverTrue}
            onMouseLeave={setHoverFalse}
            item xs={6}
            sm={4} >
            <Card>
                <NextLink href='product/slug' passHref prefetch={false}>
                    <Link>
                        <CardActionArea>
                            <CardMedia
                                className="fadeIn"
                                component='img'
                                image={productImg}
                                alt={product.title}

                            >


                            </CardMedia>
                        </CardActionArea>
                    </Link>
                </NextLink>
            </Card>

            <Box sx={{ mt: 2 }} className="fadeIn">
                <Typography fontWeight={700}>{product.title}</Typography>
                <Typography fontWeight={500}>${product.price}</Typography>

            </Box>

        </Grid>

    )
}
