import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { OptionButtons } from '../../components/molecules/OptionButtons';



const getOpciones=()=>{
  return <Button variant="contained">Contained</Button>  
}

const exampleRows=[{id:1,propiedad:"Santa Ines",dpto:"N/A", inq:"Alejandro Romanivich",monto:12000,},
{id:2,propiedad:"Provincias Unidas",dpto:"UF50", inq:"MISS U",monto:15000}]

const columns= [
  {field:"propiedad",headerName:"Propiedad",width:200},  
  {field:"dpto",headerName:"Dpto",width:75},
  {field:"inq",headerName:"Inquilino",width:200},
  {field:"monto",headerName:"Monto Total",width:100},
  {field:"opciones",headerName:"Opciones",width:200, renderCell:()=>{
    return(
      <OptionButtons 
        onClick1={()=>console.log("Pagado")}
        onClick2={()=>console.log("NO-Pagado")}
        onClick3={()=>console.log("otro")}
    />
    )
  }
}
]

export const RentalPayments=()=>{
  return (
    <div style={{ height: '75vh', width: '800px' }}>
    <DataGrid
    rows={exampleRows}
    columns={columns}
    />
    </div>
  )
}
