import { Grid, TextField, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { userIsLoggedIn } from "../../services/auth/auth";
import { productsCart } from "../cart/products-cart";
import { calculateTotal, calculatePromo } from "../../utils/calculate";
import "./checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
    const totals = Object.keys(productsCart).map(id => {
        let qtd = productsCart[id].quantity;
        return [productsCart[id].price * qtd, productsCart[id].promo_price * qtd]
    });

    const subtotal = calculateTotal(totals);
    const descont = calculatePromo(totals);

    function formatD(){
        let today = new Date;
        let mes = today.getMonth() + 1;

        return `${today.getFullYear()}-${("0" + mes).slice(-2)}-${("0" + today.getDate()).slice(-2)}`
    }

    console.log(formatD())

    useEffect(() =>{
        userIsLoggedIn()
    })

    return <Grid container spacing={2} className="checkout">
                <Grid item xs={12}>
                    <Typography variant="h5" component="h1">Realize seu pagamento</Typography>
                </Grid>
                <Grid item xs={12} md={8} lg={9} className="order-payment">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <span>Informações pessoais</span>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        label="Nome"
                                        type="text"/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        label="Sobrenome"
                                        type="text"/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        label="CPF"
                                        type="tel"/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
					                    fullWidth
                                        variant="filled"
                                        label="Telefone"
                                        type="tel"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
					                    fullWidth
                                        variant="filled"
                                        label="E-mail"
                                        type="email"/>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
					                    fullWidth
                                        variant="filled"
                                        label="Endereço"
                                        type="text"/>
                                </Grid>
                                <Grid item xs={12} sm={6} md={2}>
                                    <TextField
					                    fullWidth
                                        variant="filled"
                                        label="Número"
                                        type="text"/>
                                </Grid>
                                <Grid item xs={12} sm={6} md={2}>
                                    <TextField
					                    fullWidth
                                        variant="filled"
                                        label="Complemento"
                                        type="text"/>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
					                    fullWidth
                                        variant="filled"
                                        label="CEP"
                                        type="tel"/>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
					                    fullWidth
                                        variant="filled"
                                        label="Bairro"
                                        type="text"/>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
					                    fullWidth
                                        variant="filled"
                                        label="Cidade"
                                        type="text"/>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
					                    fullWidth
                                        variant="filled"
                                        label="Estado"
                                        type="text"/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <hr/>
                        <Grid item xs={12}>
                            <span>Detalhes de pagamento</span>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        label="Nome impresso no cartão"
                                        size="small"
                                        type="text"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        label="Número do cartão"
                                        size="small"
                                        type="tel"/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        label="CVV"
                                        size="small"
                                        type="password"/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        label="Vencimento"
                                        size="small"
                                        type="date"
                                        value={formatD()}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} className="order-detail">
                            <div>
                                <Typography variant="h6" component="h6">Resumo do pedido</Typography>
                                <ul>
                                    {
                                        Object.keys(productsCart).map((id, idx) => { 
                                            return <li key={idx}>
                                                <span>
                                                    {productsCart[id].name}
                                                </span>
                                                <span>
                                                    {productsCart[id].promo_price ? productsCart[id].promo_price.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})  : productsCart[id].price.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'}) }
                                                </span>
                                                </li>
                                            })
                                        }
                                </ul>
                                <hr/>
                                <ul>
                                    <li>
                                        <span><strong>Subtotal:</strong></span>
                                        <span>{subtotal.toLocaleString("pt-BR",{style: 'currency', currency: "BRL"})}</span>
                                    </li>
                                    <li>
                                        <span><strong>Desconto:</strong></span>
                                        <span>{descont.toLocaleString("pt-BR",{style: 'currency', currency: "BRL"})}</span>
                                    </li>
                                    <li>
                                        <span><strong>Total:</strong></span>
                                        <span>{(subtotal - descont).toLocaleString("pt-BR",{style: 'currency', currency: "BRL"})}</span>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Link to="/purchase" style={{ textDecoration:'none', color:'white' }}>
                                <Button variant="contained" fullWidth style={{backgroundColor: '#f7b0b8'}}>Comprar</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid> 
        </Grid>
}

export default Checkout;