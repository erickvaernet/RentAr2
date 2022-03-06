import { Button, ButtonGroup} from '@mui/material'
import { Box, maxWidth } from '@mui/system'
import React from 'react'

const littleBtton={
    borderRadius:"50%",
    margin:"5px",
    minWidth:"10px"
}


export const OptionButtons = ({onClick1,onClick2,onClick3}) => {
  
  return (
    <div    >
        <Button variant='contained' color='success' sx={littleBtton} onClick={onClick1} >✓</Button>
        <Button variant='contained' color='error' sx={littleBtton} onClick={onClick2}>✖</Button>
        <Button variant='contained' color='info' sx={littleBtton} onClick={onClick3}>...</Button>
    </div>
  )
}
