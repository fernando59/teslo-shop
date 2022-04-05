import { Grid, Typography } from "@mui/material"

export const OrderSummary = () => {
    return (
        <Grid container>

            <Grid item xs={6}>
                <Typography variant="h6">N° Products</Typography>

            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography >3 Items</Typography>

            </Grid>
            {/* ------ */}
            <Grid item xs={6}>
                <Typography variant="h6">SubTotal</Typography>

            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography >$1500</Typography>

            </Grid>
            {/* ------ */}
            <Grid item xs={6}>
                <Typography variant="h6">Tax</Typography>

            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography >15%</Typography>

            </Grid>
            {/* ------ */}
            <Grid item xs={6} sx={{ mt: 3 }}>
                <Typography variant="subtitle1">Total : </Typography>

            </Grid>
            <Grid item xs={6} sx={{ mt: 3 }} display='flex' justifyContent='end'>
                <Typography >$2000</Typography>

            </Grid>

        </Grid>
    )
}
