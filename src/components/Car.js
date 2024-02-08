import React from 'react'
import cars from '../cars.json'
import {useParams} from "react-router-dom" 
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';



// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {

    let {id} = useParams();
    console.log(id)
    // the + turns it into a number 
    const car = cars.find(car => car.id == +id);
    console.log(car)

    return (
        <div className='car-container' >
            <Paper elevation={3} className='car-paper'>
       
        <h1>{car.Name}</h1>
        <Chip className='Chip' label={`id: ${car.id}`}></Chip>
        <Chip className='Chip' label={`Name: ${car.Name}`}></Chip>
        <Chip className='Chip' label={`Miles_per_Gallon: ${car.Miles_per_Gallon}`}></Chip>
        <Chip  className='Chip'label={`Cylinders: ${car.Cylinders}`}></Chip>
        <Chip className='Chip' label={`Displacement: ${car.Displacement}`}></Chip>
        <Chip className='Chip' label={`Horsepower: ${car.Horsepower}`}></Chip>
        <Chip  className='Chip'label={`Weight_in_lbs: ${car.Weight_in_lbs}`}></Chip>
        <Chip  className='Chip'label={`Acceleration: ${car.Acceleration}`}></Chip>
        <Chip  className='Chip'label={`Year: ${car.Year}`}></Chip>
        <Chip  className='Chip'label={`Origin: ${car.Origin}`}></Chip>

        </Paper>
        </div>
        
    )
}

export default Car