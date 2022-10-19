import '../../assets/css/auth.css'
import { Grid,
         TextField,
         Button,
         Stack,
         OutlinedInput,
         InputAdornment,
         IconButton,
         FormControl,
         InputLabel
 } from "@mui/material";
import register from '../../assets/img/register.jpg'
import logo from '../../assets/img/logo.png'
import LoginIcon from '@mui/icons-material/Login'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Register = () => {
    const [visibilityToggle, setVisibilityToggle] = useState(true);

    const toggleVisibility = () => {
        setVisibilityToggle(!visibilityToggle);
    }

    return <Grid container spacing={2} style={{
        height:'100vh'
    }}>
                <Grid className='leftSide' item sx={{
                    padding: '10px',
                    boxSizing: 'border-box',
                    height:'100%',
                }} xs={0} md={7} lg={8}>
                    <Stack spacing={2} style={{
                        height:'100%',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <img src={register} style={{
                        width: '100%',
                        }} alt={'Logo'}/>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Stack spacing={2} style={{
                        height:'100%',
                        justifyContent:'center',
                        alignItems:'center',
                        paddingLeft: 16,
                        paddingRight: 16,
                    }}>
                        <img src={logo} style={{
                            width: '20%',
                         }} alt={'Logo'}/>
                        <h1>Bem-vindo, crie sua conta </h1>
                        <Grid container>
                            <Grid item sx={{
                                marginBottom: '16px'
                            }} xs={12}>
                                <TextField fullWidth label="Nome" type="text" variant="outlined" />
                            </Grid>
                            <Grid item sx={{
                                marginBottom: '16px'
                            }} xs={12}>
                                <TextField fullWidth label="E-mail" type="email" variant="outlined" />
                            </Grid>
                            <Grid item sx={{
                                marginBottom: '16px'
                            }} xs={12}>
                               <FormControl fullWidth>
                                <InputLabel>Digite sua senha</InputLabel>
                                    <OutlinedInput fullWidth 
                                    label="Digite sua senha" 
                                    type={visibilityToggle ? 'password' : 'text'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton aria-label="toggle password visibility" onClick={toggleVisibility}>
                                                {
                                                    visibilityToggle ? <Visibility/> : <VisibilityOff/>
                                                }
                                            </IconButton>
                                        </InputAdornment>}
                                    variant="outlined" />
                                </FormControl>
                            </Grid>
                            <Grid item sx={{
                                marginBottom: '16px'
                            }} xs={12}>
                                <FormControl fullWidth>
                                <InputLabel>Confirme sua senha</InputLabel>
                                    <OutlinedInput fullWidth 
                                    label="Confirme sua senha" 
                                    type={visibilityToggle ? 'password' : 'text'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton aria-label="toggle password visibility" onClick={toggleVisibility}>
                                                {
                                                    visibilityToggle ? <Visibility/> : <VisibilityOff/>
                                                }
                                            </IconButton>
                                        </InputAdornment>}
                                    variant="outlined" />
                                </FormControl>
                            </Grid>
                            <Grid item sx={{
                                marginBottom: '16px'
                            }} xs={12}>
                            <Button fullWidth variant="contained" style={{
                               backgroundColor: '#f7b0b8'
                            }} endIcon={<LoginIcon />}>Criar conta</Button>
                            </Grid>
                            <Link style={{
                                textAlign:'center',
                                display: 'block',
                                width: '100%'
                            }}to="/login">Entrar</Link>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
}

export default Register;