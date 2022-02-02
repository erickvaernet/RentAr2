import { Button as MUIButton, Container } from "@mui/material";
import { Box, minHeight} from "@mui/system";
import { useForm } from "react-hook-form";
import { Input } from "../../components/atoms"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export const Login=()=>{
    const {register,handleSubmit, formState:{errors}} = useForm();
    const validationRules={
        email: { required:"Este campo es requerido",
                 minLength:{value:6, message:"Minimo 6 caracteres"}, 
                 maxLength:{value:100, message:"Máximo 100 caracteres"},}
        ,
        password: { required:"Este campo es requerido",
                    minLength:{value:6, message:"Minimo 6 caracteres"}, 
                    maxLength:{value:20, message:"Máximo 20 caracteres"},}

    }

    console.log(errors)
    return(
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              flexWrap:"nowrap",
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit((data)=>console.log(data))} noValidate sx={{ mt: 1 }}>
              
                <Input name="email" register={register} errors={errors.email} rules={validationRules.email} margin="normal" />
                <Input name="password" register={register} errors={errors.password} rules={validationRules.password}   />
                <MUIButton variant="contained" type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>Enviar</MUIButton>
              
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );
}