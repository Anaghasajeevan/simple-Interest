import { Stack, TextField, colors } from '@mui/material';
import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';




function App() {

  const[principle,setPrinciple]=useState("")
  const[rate,setRate]=useState("")
  const[year,setYear]=useState("")
  const[interest,setInterest]=useState(0)

 

 const calculateInterest=(e)=>{

  e.preventDefault()

    console.log(principle,rate,year);

    if(!principle|| !rate || !year){
      alert('please fill the form completely')
    }
    else{
      setInterest(principle*rate*year/100)
    }

  }

  const resetForm = ()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setInterest(0)
  }



  return (

    <>
      <div className="app">

        <div className='container'>
          <div className='heading-text'>
            {/* heading */}
            <h3 className='title'>SIMPLE CALCULATOR</h3> <br />
            <p className='title-para'>CALCULATE YOUR SIMPLE INTEREST</p>

          </div>

          <div className='amount-card'>

            <div className='card-text'>

              <h3 className='total-amount'> ₹ {interest} </h3> <br />
              <p className='total-para'> Total-Simple-Interest</p>

            </div>

          </div>

          <form onSubmit={calculateInterest}>

            {/* to hold text filed  */}

            <div className='text-filed'>

              {/* principle amount  */}

              <div className='input'>
                <TextField value={principle || ""}
                onChange={e=>setPrinciple(e.target.value)}
                className='outlined-basic' id="outlined-basic" label="principle Amount" variant="outlined" />
              </div>

              {/* INTEREST  */}

              <div className='input'>
                <TextField value={rate || ""}
                 onChange={e=>setRate(e.target.value)}
                className='outlined-basic' id="outlined-basic" label=" Rate of interest(p.a)%" variant="outlined" />
              </div>

              <div className='input'>
                <TextField value={year || ""}
                 onChange={e=>setYear(e.target.value)}
                 className='outlined-basic' id="outlined-basic" label="Time Period(yr)" variant="outlined" />
              </div>



            </div>

            {/* button  */}

            <div className='btn-group'>

          {/* stack  */}

          <Stack direction="row" spacing={2}>

          <Button type='submit' className='btn' style={{backgroundColor:'black'}}  variant="contained">CALCULATE</Button>
          <Button onClick={resetForm} className='btn' style={{backgroundColor:'red'}} variant="outlined">RESET</Button>
  
          </Stack>

            </div>

          </form>

        </div>
      </div>
    </>
  );
}

export default App;