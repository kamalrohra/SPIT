import React, { useState, useContext } from 'react';
import { Box, CardContent, CardMedia, TextField, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import demoProfilePicture from '../utils/prof.jpg';

const ChannelCard1 = ({ channelDetail, marginTop }) => {

  return (
    <div>
    <div className="submit-form">
        <form className="submit-form">
        <div>
            <TextField value={this.state.title} onChange={(e)=>{this.setState({title: e.target.value})}}></TextField>
            <div style={{marginTop:"10px"}}><button type='submit'>Update</button></div>
        </div>
        <input type="hidden" value={this.state.idarticle} />
        </form>
    </div>
    </div>

    
  )
};


export default ChannelCard1;
