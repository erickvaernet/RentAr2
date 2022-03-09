import { Box, Typography,Button, Grid, Link, Container, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, Checkbox } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form";
import {Input} from "../../components/atoms/Input"
import {request} from "../../services";

export const AddProperty = () => {
    //Hook parte de react-forms
    const {register,handleSubmit, formState:{errors}} = useForm();

    const [group, setGroup] = React.useState('');

    const handleChange = (event) => {
        setGroup(event.target.value);
    };

    //Validaciones para el inicio de sesión
    const validationRules={
        email: { required:"Este campo es requerido",
                 minLength:{value:6, message:"Minimo 6 caracteres"}, 
                 maxLength:{value:100, message:"Máximo 100 caracteres"},}
        ,
        password: { required:"Este campo es requerido",
                    minLength:{value:6, message:"Minimo 6 caracteres"}, 
                    maxLength:{value:20, message:"Máximo 20 caracteres"},}
    }

    //Lo que sucede al apretar "enviar" en el formulario:
    const onSubmit= (formData)=>{
      request.post('https://jsonplaceholder.typicode.com/posts',formData,(result)=>{console.log(result)});
    }

  return (
    <Container maxWidth="sm" minWidth="xs">
        <Typography component="h5" variant="h6">
            Agregar Propiedad
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }} >
            <Box>
                <InputLabel id="label-select-grupo"> Grupo </InputLabel>
                <Select
                    labelId="label-select-grupo"
                    id="select-grupo"
                    value={group}
                    label="Grupo"
                    onChange={handleChange}
                    fullWidth
                >
                    <MenuItem value={10}>Pvcias Unidas</MenuItem>
                    <MenuItem value={20}>Santa Ines</MenuItem>
                </Select>
            </Box>

            <Input name="apartment" label="Departamento" variant='outlined' register={register} errors={errors.email} error={Boolean(errors.email)} rules={validationRules.email} type="text"/>
            <Input name="description" label="Descripción" multiline rows={4} variant='filled' register={register} errors={errors.password} error={Boolean(errors.password)} rules={validationRules.password} type="text"/>
            <Input name="rooms" fullWidth="false" label="Número de Habitaciones" variant='outlined' type="number" register={register} errors={errors.email} error={Boolean(errors.email)} rules={validationRules.email}/>
            <Box sx={{display:"flex",flexDirection:"row", wrap:"wrap",justifyContent:"space-between",gap:"5px"}}>
                <Input name="bedrooms" fullWidth="false" label="Número de dormitorios" variant='outlined' type="number" register={register} errors={errors.email} error={Boolean(errors.email)} rules={validationRules.email}/>
                <Input name="bathrooms" fullWidth="false" label="Número de baños" variant='outlined' type="number" register={register} errors={errors.email} error={Boolean(errors.email)} rules={validationRules.email}/>
            </Box>
            <Box border="solid 1px" borderRadius={1} borderColor="gray" padding={1} marginTop={2} marginBottom={2}>
                    <FormLabel id="cocina-comedor">*Cocina y comedor juntos o separados</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="cocina-comedor"
                        defaultValue="juntos"
                        name="radio-buttons-group"
                        
                    >
                        <FormControlLabel value="juntos" control={<Radio />} label="Juntos" />
                        <FormControlLabel value="separados" control={<Radio />} label="Separados" />
                    </RadioGroup>
            </Box>
            <Box>
                <FormControlLabel control={<Checkbox />} label="Con pileta" />
                <FormControlLabel control={<Checkbox/>} label="Con garage" />
                <FormControlLabel control={<Checkbox/>} label="Con patio" />
                <FormControlLabel control={<Checkbox/>} label="Permite mascotas" />
            </Box>
            <Button variant="contained" type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>Enviar</Button>
            
        </Box>
    </Container>
  )
}

