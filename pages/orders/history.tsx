import { Chip, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import NextLink from 'next/link'




const rows = [
    { id: 1, paid: false, fullname: 'Fernando Mercado' },
    { id: 2, paid: true, fullname: 'Tesa tMercado' },
    { id: 3, paid: false, fullname: 'Test Mercado' },
    { id: 4, paid: true, fullname: 'Jhon Mercado' },
    { id: 5, paid: false, fullname: 'Due Mercado' },
    { id: 6, paid: true, fullname: 'Ds Mercado' },
    { id: 7, paid: false, fullname: 'Kailer Mercado' },
]

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100, },
    { field: 'fullname', headerName: 'Full Name', width: 300, },
    {
        field: 'paid',
        headerName: 'Paid',
        description: 'Show information if the order is paid',
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
            return (
                params.row.paid
                    ? <Chip color='success' label='Paid' variant='outlined' />
                    : <Chip color='error' label='No Paid' variant='outlined' />


            )
        }
    },
    {
        field: 'order',
        headerName: 'Show Order',
        width: 200,
        sortable:false,
        renderCell: (params: GridValueGetterParams) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    <Link underline='always'>
                        Show Order
                    </Link>

                </NextLink>

            )
        }
    },
]

const HistoryPage = () => {
    return (
        <ShopLayout title='History Orders' pageDescription='History Orderes Client'>
            <Typography variant='h1' component='h1'>History Orders</Typography>

            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }} >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]} />

                </Grid>

            </Grid>


        </ShopLayout>
    )
}

export default HistoryPage