import { Box, TextField } from '@mui/material'
import React from 'react'
import {useState} from 'react'
import Typography from '@mui/material/Typography'
function EventForm() {
    const [event, setEvent] = useState({
        title:"",
        date:"",
        location:"",
        description:"",
    });
    const submit = (e) =>{
    e.preventDefault()
    fetch('/api',{
        method: 'POST',
        body: JSON.stringify({event}),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(json => setEvent(json.event))
    console.log(event);
}
    return (
        <center>
        <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '70%' },
                    marginTop: "20px",
                    marginBottom: "30px",
                    borderRadius: "8px",
                    paddingTop: "5px",
                    paddingBottom: "30px",
                    width: "45%",
                    // boxShadow: "3px 3px 8px  3px lightgrey"
            }}
            noValidate
            autoComplete="off"
            onSubmit={submit}
            method="POST"

        >
            <Typography sx={{color:'#737373'}} variant="h4">
                Create Event
            </Typography>
                        <div>
                            
                <TextField
                    required
                    id="EventTitle"
                    label="Event Title"
                    type="text"
                    variant='outlined'
                    onChange={e=>setEvent({...event, title: e.target.value})}
                />
            </div>
            <div>
                <TextField
                required
                id="EventDate"
                type="date"
                onChange={e=>setEvent({...event, date: e.target.value})}
                />
            </div>
            <div>
                <TextField
                    required
                    id="EventLocation"
                    label="Location"
                    type="text"
                    variant='outlined'
                    onChange={e=>setEvent({...event, location: e.target.value})}
                />
            </div>
            <div>
                <TextField
                    id="EventImage"
                    type="file"
                    variant='outlined'
                />
            </div>
            <div>
                <TextField
                    required
                    id="EventDescription"
                    sx={{
                        '& input': {
                            height: "200px"
                        }
                    }}
                    label="Description"
                    type="text"
                    variant='outlined'
                    onChange={e=>setEvent({...event, description: e.target.value})}
                />
            </div>
            {/* <br/>
            <hr/> */}
            <br/>
            <button style={{
                marginTop: "10px", 
                backgroundColor:'rgb(58,149,233)', 
                border: 'none', 
                color:'white', 
                width: "70%", 
                height: "40px", 
                borderRadius: "5px"
                }} type="submit" >Create Event</button>
        </Box>
        </center>
    )
}

export default EventForm