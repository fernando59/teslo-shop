import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts'
import { ProductList } from '../components/products'
import { initialData } from '../database/products'
import { IProduct } from '../interfaces'

const Home: NextPage = () => {
  return <>

    <ShopLayout title='Teslo Shop' pageDescription='Find best products from teslo shop'>
      <Typography variant='h1' component='h1'>Store</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All products</Typography>

      {/*LIST PRODUCTS  */}
      <ProductList
        products={initialData.products as IProduct[]}
      />


      
    </ShopLayout>
  </>
}

export default Home
