import { Box, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
function EventForm() {
    const [event, setEvent] = useState({
        name: "",
        start_date: "",
        address: {},
        description: "",
    });
    const submit = (e) => {
        e.preventDefault()
        console.log(event);
        fetch('http://192.168.147.160:8090/event/createEvent', {
            method: 'POST',
            body: JSON.stringify({...event}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
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
                <Typography sx={{ color: '#737373' }} variant="h4">
                    Create Event
                </Typography>
                <div>

                    <TextField
                        required
                        id="EventTitle"
                        label="Event Title"
                        type="text"
                        variant='outlined'
                        onChange={e => setEvent({ ...event, name: e.target.value })}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="EventDate"
                        type="date"
                        onChange={e => setEvent({ ...event, start_date: e.target.value })}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="EventLocation"
                        label="Location"
                        type="text"
                        variant='outlined'
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
                        onChange={e => setEvent({ ...event, description: e.target.value })}
                    />
                </div>
                {/* <br/>
            <hr/> */}
                <br />
                <button style={{
                    marginTop: "10px",
                    backgroundColor: 'rgb(58,149,233)',
                    border: 'none',
                    color: 'white',
                    width: "70%",
                    height: "40px",
                    borderRadius: "5px"
                }} type="submit" >Create Event</button>
            </Box>
        </center>
    )
}

export default EventForm