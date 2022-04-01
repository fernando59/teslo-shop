import { Grid } from "@mui/material"
import { FC } from "react"
import { IProduct } from "../../interfaces"
import { ProductCart } from "./ProductCart"

interface Props{
    products:IProduct[]
}
export const ProductList:FC<Props> = ({products}) => {
  return (
    <Grid container spacing={4}>
        {
            products.map(product =>(<ProductCart key={product.slug} product={product}/>))
        }
    </Grid>
  )
}
