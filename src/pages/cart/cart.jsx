import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { productsCart } from "./products-cart";
import "./cart.css";
import { Stack } from "@mui/system";

const Cart = () => {
   // return Object.keys(productsCart).map(id => productsCart[id].name)
   return <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={8} >
            <List sx={{width: '100%'}}>
                <ListItem sx={{
                    alignItems: 'center',
                }}
                    secondaryAction={
                    <IconButton edge="end" aria-label="delete" ><DeleteIcon/></IconButton>
                } >
                    <ListItemAvatar className="cartProduct_image">
                        <div style={{
                            backgroundImage: 'url("https://cobasi.vteximg.com.br/arquivos/ids/1004186/image-3541490d04fd41888e081223588e681c.jpg?v=637952127916300000")',
                        }}></div>
                    </ListItemAvatar>
                   <Stack direction="row">
                        <Stack direction="column" sx={{
                            justifyContent: 'center',
                            paddingLeft: '5px',
                            boxSizing: 'border-box'
                        }}> 
                            <Typography sx={{
                                display:'inline',
                                fontWeight: '600',
                                fontSize: '1.2em'
                            }} 
                            component="h6" variant="h6" >Produto</Typography>
                            <Typography sx={{
                                display:'inline',
                                fontSize: '0.9em',
                            }} 
                            component="span" variant="body2" >Descrição do produto...</Typography>
                        </Stack>
                        <Stack direction="row" sx={{
                            alignItems: 'center',
                        }}>
                            <Typography sx={{
                                display:'inline',
                                color: 'red',
                                fontWeight: '700',
                            }} 
                            component="p" variant="p">199,99</Typography>
                            <Typography sx={{
                                display:'inline',
                                textDecoration:'line-through',
                            }} 
                            component="p" variant="p">299,99</Typography>
                        </Stack>
                        <Stack className="stackQuantity" direction="row">
                            <TextField size="small" type="number"/>
                        </Stack>
                   </Stack>
                </ListItem>
            </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4} >

        </Grid>
   </Grid>
}

export default Cart;