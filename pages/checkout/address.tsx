import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'

const AddressPage = () => {
    return (
        <ShopLayout title='Address' pageDescription='Address'>
            <Typography variant='h1' component='h1' >Address</Typography>

            <Grid container spacing={2} sx={{mt:4}}>

                <Grid item xs={12} sm={6}>
                    <TextField label='Name' variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField label='Last Name' variant='filled' fullWidth />
                </Grid>
                {/*  */}
                <Grid item xs={12} sm={6}>
                    <TextField label='Direction' variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField label='Direction 2 (optional)' variant='filled' fullWidth />
                </Grid>
                {/*  */}
                <Grid item xs={12} sm={6}>
                    <TextField label='Postal Code' variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField label='City' variant='filled' fullWidth />
                </Grid>

            </Grid>
            <Box display='flex' justifyContent='center' sx={{ mt: 5 }}>
                <Button color='secondary' className='circular-btn' size='large'>Review Delivery</Button>

            </Box>

        </ShopLayout>
    )
}

export default AddressPage