import { products, categories } from './products'
import { Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Catalog = () => {
    return <Grid container spacing={4} style={{
        marginTop:'10px',
        padding: '20px'
    }}>
        {
            Object.keys(products).map(id => {
                return <Grid item xs={12} sm={6} md={4} lg={3} sx={{
                    position: 'relative',
                    paddingTop:'0 !important',
                    marginBottom: '32px'
                    //boxShadow: '5px 5px 11px #f7b0b861'
                }}> 
                    <span style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        color: 'white',
                        fontWeight: 'bold',
                        backgroundColor: '#f7b0b8',
                        boxSizing: 'border-box',
                        padding: '10px'
                    }}>10%</span>
                    <img src={products[id].image} style={{ width:'100%'}} alt={''}/>

                    {
                        products[id].categories.map(categoryId => {
                            return <span>{categories[categoryId].name}</span>
                        })
                    }
                   
                    <Typography variant="h4" component="h4" style={{ marginTop:'16px', marginBottom:'8px' }}>{products[id].name}</Typography>
                    <Typography variant="p" component="p" style={{ marginBottom:'16px' }}>{products[id].description.substring(0, 150)}...</Typography>
                    <Link to={"../product/" + id} style={{ textDecoration:'none', color:'white' }}>
                        <Button fullWidth variant='contained' style={{backgroundColor: '#f7b0b8'}}>
                        Ver produto
                        </Button>
                    </Link>
                 </Grid> 
            })
        }
    </Grid>
}

export default Catalog;