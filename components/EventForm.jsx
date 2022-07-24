import { Box, TextField } from '@mui/material'
import React from 'react'

function EventForm() {
    return (
        <center>
        <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '70%' },
                    marginTop: "50px",
                    border: "1px solid black",
                    borderRadius: "8px",
                    padding: "30px",
                    width: "50%"
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="EventTitle"
                    label="Event Title"
                    type="text"
                    variant='filled'
                    
                />
            </div>
            <div>
                <TextField
                required
                id="EventDate"
                type="date"
                />
            </div>
            <div>
                <TextField
                    required
                    id="EventLocation"
                    label="Location"
                    type="text"
                    variant='filled'
                />
            </div>
            <div>
                <TextField
                    id="EventImage"
                    type="file"
                    variant='filled'
                />
            </div>
            <div>
                <TextField
                    required
                    id="EventDescription"
                    sx={{
                        '& input': {
                            height: "230px"
                        }
                    }}
                    label="Description"
                    type="text"
                    variant='filled'
                />
            </div>
            {/* <br/>
            <hr/> */}
            <br/>
            <button style={{marginTop: "10px", backgroundColor:'rgb(58,149,233)', border: 'none', color:'white', width: "60%", height: "40px", borderRadius: "5px"}} >Create Event</button>
        </Box>
        </center>
    )
}

export default EventForm