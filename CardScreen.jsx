import React, { useState } from 'react'
import Card from "./Card";
import Loder from './Loder'
import '../CSS/CardScreen.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';

function CardScreen() {
 let[data1,setData1]=useState("");
 let[data2,setData2]=useState("");
 let[data3,setData3]=useState("");
 let[data4,setData4]=useState("");
 let[data5,setData5]=useState("");
 let[data6,setData6]=useState("");
 let[isLoded,setIsLoded]=useState(false);

 const getUsers=()=>{
  axios.get('https://reqres.in/api/users?page=1').then(res=>{
    //console.log(res);
    setIsLoded(true);
    setTimeout(() => {
      console.log("Loding....");
      
    setData1(res.data.data[0]);
    setData2(res.data.data[1]);
    setData3(res.data.data[2]);
    setData4(res.data.data[3]);
    setData5(res.data.data[4]);
    setData6(res.data.data[5]);
      setIsLoded(false);
    }, 2000);
  
    

  }).catch(err=>{
    console.log(err);
  })
 }
    return (
     <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: '#7ebffc', borderShadow: "0 1px 2px rgba(231, 224, 224, 0.995), 0 2px 4px rgba(211, 198, 198, 0.963), 0 4px 8px rgba(211, 198, 198, 0.963), 0 8px 16px rgba(211, 198, 198, 0.963), 0 16px 32px rgba(211, 198, 198, 0.963),0 32px 64px rgba(211, 198, 198, 0.963)" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              style={{ color: 'black' }}
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="black">
              <span style={{ fontFamily: 'cursive', fontWeight: '600' }}>Gawali Abhishek</span>
            </Typography>
            <Button style={{ color: 'black' }} onClick={getUsers}>Get Users</Button>
          </Toolbar>
        </AppBar>
      </Box>


      {isLoded ? <Loder/> : <> </>}
        <div className="container">
            <div className="row1">
                <Card first_name={data1.first_name} last_name={data1.last_name} img={data1.avatar} email={data1.email} />
                <Card first_name={data2.first_name} last_name={data2.last_name} img={data2.avatar} email={data2.email} />
                <Card first_name={data3.first_name} last_name={data3.last_name} img={data3.avatar} email={data3.email} />

            </div>
            <div className="row2">
                <Card first_name={data4.first_name} last_name={data4.last_name} img={data4.avatar} email={data4.email} />
                <Card first_name={data5.first_name} last_name={data5.last_name} img={data5.avatar} email={data5.email} />
                <Card first_name={data6.first_name} last_name={data6.last_name} img={data6.avatar} email={data6.email} />

            </div>
        </div>
        </>
    )
}

export default CardScreen