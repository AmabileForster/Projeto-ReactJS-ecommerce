import { Button, Chip, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Stack } from "@mui/system";
import { useParams } from "react-router-dom";
import { products, categories } from "../catalog/products";
import "./product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


const Product = () => {
    const params = useParams();
    const [currentImage, setCurrentImage] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setCurrentImage(products[params.id].images[0]);
    }, [])

    const setImageToView = (position) => {
        setCurrentImage(products[params.id].images[position])
    }

    const changeQuantityButton = (value) => {
        if(quantity >= 0){
            let result = quantity + value;
            if(result === -1){
                result = 0;
            }
            setQuantity(result);
        }
    }

    return <Grid container spacing={2} className="product">
            <Grid item xs={12} sm={5} className="imageSide">
                <Stack className="imageSide__image">
                    <div className="imageSide__image-item" style={{
                        backgroundImage: `url(${currentImage})`,
                    }}>

                    </div>
                </Stack>
                <Stack direction="row" className="imageSide__images">
                {
                    products[params.id].images.map((image, idx) => <img onClick={()=>setImageToView(idx)} src={image} alt=""></img>)
                }
                </Stack>
            </Grid>
            <Grid item xs={12} sm={7} className="productItem">
                <Typography variant="h4" component="h1" className="productItem__title">{products[params.id].name}</Typography>
                <div className="productItem__categories">

                {products[params.id].categories.map(categoryId => <Chip label={categories[categoryId].name} /> )} 
                </div>
                    {
                      products[params.id].promo_price ? <Typography variant="p" component="p" className="productItem__promo__price">{products[params.id].promo_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography> : ""
                    }
                    <Typography variant="p" component="p" className="productItem__price" style={{
                        fontSize: products[params.id].promo_price ? '16px' : '20px',
                        color: products[params.id].promo_price ? '#a3a3a3' : '#333333',
                        textDecoration: products[params.id].promo_price ? 'line-through' : 'none'
                    }}>{products[params.id].price.toLocaleString("pt-BR",{style: 'currency', currency: "BRL"})}</Typography>
                <Typography variant="p" component="p" className="productItem__description">{products[params.id].description}</Typography>
                <div className="productItem__quantity">
                    <IconButton onClick={() => changeQuantityButton(-1)}>
                        <RemoveIcon/>
                    </IconButton>
                    <TextField size="small" type="number" value={quantity} style={{width: '50px'}} onChange={(event) => {setQuantity(event.target.value)}} />
                    <IconButton onClick={() => changeQuantityButton(1)}>
                        <AddIcon/>
                    </IconButton>
                </div>
                <Button variant="contained" size="large" style={{backgroundColor:'#f7b0b8'}} endIcon={<ShoppingCartIcon />}>Comprar</Button>
            </Grid>
    </Grid>
    
    
    
}


export default Product;