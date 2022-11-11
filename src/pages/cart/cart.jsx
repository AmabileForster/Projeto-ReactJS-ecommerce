import { Button, Grid, IconButton, List, ListItem, ListItemAvatar, TextField, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { productsCart } from "./products-cart";
import { calculateTotal, calculatePromo } from "../../utils/calculate";
import "./cart.css";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

const Cart = () => {
    const totals = Object.keys(productsCart).map(id => {
        let qtd = productsCart[id].quantity;
        return [productsCart[id].price * qtd, productsCart[id].promo_price * qtd]
    });

    const subtotal = calculateTotal(totals);
    const descont = calculatePromo(totals);

    return <Grid container spacing={2} className='body_cart'>
        <Grid item xs={12} md={12} lg={8} sx={{
            padding: '20px !important',
            
        }}>
            <div style={{
            boxSizing: 'border-box',
            backgroundColor:'#fff',
            borderRadius:'15px',
            boxShadow: '4px 4px 12px -6px rgba(0,0,0,0)',
            padding:'20px'
        }} >
                <List sx={{width: '100%'}}>
                    {
                        Object.keys(productsCart).map(id => {
                            return <ListItem sx={{
                                alignItems: 'center',
                            }}
                                secondaryAction={
                                <IconButton edge="end" aria-label="delete" ><DeleteIcon/></IconButton>
                            } >
                                <ListItemAvatar className="cartProduct_image" sx={{
                                    flexGrow: 1,
                                }}>
                                    <div style={{
                                        backgroundImage: `url("${productsCart[id].images[0]}")`,
                                    }}></div>
                                </ListItemAvatar>
                            <Stack direction="row" sx={{
                                    flexGrow: 2,
                                }}>
                                    <Stack direction="column" sx={{
                                        justifyContent: 'center',
                                        paddingLeft: '5px',
                                        boxSizing: 'border-box',
                                        flexGrow: 2,
                                    }}> 
                                        <Typography sx={{
                                            display:'inline',
                                            fontWeight: '600',
                                            fontSize: '1.2em'
                                        }} 
                                        component="h6" variant="h6" >{productsCart[id].name}</Typography>
                                        <Typography sx={{
                                            display:'inline',
                                            fontSize: '0.9em',
                                        }} 
                                        component="span" variant="body2" >{productsCart[id].description.substr(0, 50)}...</Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{
                                        alignItems: 'center',
                                        flexGrow: 1,
                                        paddingLeft: '5px',
                                        paddingRight: '5px',
                                        boxSizing: 'border-box'
                                    }}>
                                        {
                                            productsCart[id].promo_price ? <Typography sx={{
                                                display:'inline',
                                                color: 'red',
                                                fontWeight: '700',
                                                fontSize:'16px',
                                                paddingLeft: '5px',
                                                paddingRight: '5px',
                                                boxSizing: 'border-box'                                                
                                            }} 
                                            component="p" variant="p">{productsCart[id].promo_price.toLocaleString("pt-BR",{style: 'currency', currency: "BRL"})}</Typography> : <span style={{
                                                minWidth:'74px'
                                            }}/>
                                        }
                                        <Typography sx={{
                                                display:'inline',
                                                textDecoration: productsCart[id].promo_price ? 'line-through' : 'none',
                                                fontSize: productsCart[id].promo_price ? '12px' : '14px'
                                            }} 
                                            component="p" variant="p">{productsCart[id].price.toLocaleString("pt-BR",{style: 'currency', currency: "BRL"})}</Typography>                                   
                                    </Stack>
                                    <Stack className="stackQuantity" direction="row" sx={{
                                        flexGrow: 1,
                                    }}>
                                        <TextField size="small" type="number"/>
                                    </Stack>
                            </Stack>
                            </ListItem>
                        })
                    }
                </List>
        </div>
            
        </Grid>
        <Grid item xs={12} md={12} lg={4} sx={{
            padding: '20px !important',
        }} >
            <div style={{
            boxSizing: 'border-box',
            backgroundColor:'#fff',
            borderRadius:'15px',
            boxShadow: '4px 4px 12px -6px rgba(0,0,0,0)',
            padding:'20px'
        }} >
                <ul className="listTotal">
                    <li>
                        <span>Subtotal</span>
                        <span>{subtotal.toLocaleString("pt-BR",{style: 'currency', currency: "BRL"})}</span>
                    </li>
                    <li>
                        <span>Desconto</span>
                        <span>{descont.toLocaleString("pt-BR",{style: 'currency', currency: "BRL"})}</span>
                    </li>
                    <li>
                        <span>Total</span>
                        <span>{(subtotal - descont).toLocaleString("pt-BR",{style: 'currency', currency: "BRL"})}</span>
                    </li>
                </ul>
                <Link to="/checkout" style={{ textDecoration:'none', color:'white' }}>
                    <Button variant="contained" fullWidth style={{backgroundColor: '#f7b0b8'}}>Comprar</Button>
                </Link>
            </div>
            
        </Grid>
   </Grid>
}

export default Cart;