import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
export default function Profile({ data }) {
  return (
  <>
  <h1 style={{marginLeft:'400px',color:'white'}}>MY PROFESSION</h1>



{/*   
      <h1>Home Page</h1>
      {data.map((item,id)=>(
    <div>
    <h1>{item.userId}</h1>
    <h2>{item.id}</h2>
    <h3>{item.title}</h3>
    </div>
      ))} */}
     

     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={12} style={{marginLeft:'370px'}}> <Stack direction="row" spacing={2}>
    
      <Button variant="contained" color="success" startIcon={<CreateIcon />} >
        
      </Button>
     
     
      <Button variant="contained" color="secondary"  startIcon={<ReadMoreIcon />}>
        
      </Button>
     
     
      <Button variant="contained" color="info"  startIcon={<SecurityUpdateGoodIcon />}>
      
      </Button>
     
     
      <Button variant="contained" color="warning"  startIcon={<DeleteSweepIcon />}>
       
      </Button>
     

    </Stack>
    </Grid>


    <Grid item xs={12}  style={{marginLeft:'320px'}}> <Stack direction="row" spacing={2}>
    
    <Button variant="contained" color="success" >
    <span style={{color:'white',fontWeight:'bold',fontSize:'16px'}}>CREATE</span>
    </Button>
   
   
    <Button variant="contained" color="secondary">
    <span style={{color:'white',fontWeight:'bold',fontSize:'16px'}}>READ</span>
    </Button>
   
   
    <Button variant="contained" color="info">
    <span style={{color:'white',fontWeight:'bold',fontSize:'16px'}}>UPDATE</span>
    </Button>
   
   
    <Button variant="contained" color="warning">
        <span style={{color:'white',fontWeight:'bold',fontSize:'16px'}}>DELETE</span>
      
    </Button>
   

  </Stack>
  </Grid>
     
      
      
      </Grid>
    </Box>





  </>
  )
}


export async function getStaticProps() {
    // Data Fetching
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  }
  