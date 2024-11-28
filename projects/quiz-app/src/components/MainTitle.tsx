import { Typography } from '@mui/material'
import React from 'react'

type Props = {}

export default function MainTitle({}: Props) {
  return (
    <Typography gutterBottom sx={{
        fontSize:{
            xs:'5vh',
            lg:'8vh'
        },
        color:'white',
        fontWeight:700,
        mt:'4vh',
        textShadow: '5px 5px 10px #060284',
      }}>
        Quiz Application
      </Typography>
  )
}