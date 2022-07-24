import { Grid, Typography } from "@mui/material";
import EventCard from "../components/EventCard";
import EventCaterogies from "../components/EventCaterogies";
import Layout from "../components/Layout";
import MapsAPI from "../components/MapsAPI";
import Sidebar from "../components/Sidebar";
import EventDatePicker from "../components/EventDatePicker";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
<<<<<<< HEAD
import { useState } from 'react';
import { useEffect } from 'react';
export default function Home() {
const [events, setEvents] = useState();
const [caterogies, setCaterogies] = useState();
const getApiData = async() =>{
    const response = await fetch('http://localhost:8083/event/getAllEvent').then((response)=>response.json());
    setEvents(response);
}

useEffect(() => {
    getApiData();
    
}, []);

=======
import { useState } from "react";

export default function Home() {
    const[state, setState] = useState({address:""});
>>>>>>> a80172eb8ba337b47a0ede9950d10063242896ef
    const demoEvents = Array(10).fill(0).map((_, i) => (
        {
            title: `Event ${i}`,
            description: "Some description",
            startDate: "",
            endDate: "",
            category: "Tech",
            likes: 10
        }
    ));
<<<<<<< HEAD
   
    
=======

    const setAddress = (address) =>{
        setState({...state, address});
    }


>>>>>>> a80172eb8ba337b47a0ede9950d10063242896ef
    return (
        <Layout>
            <div className="App">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={2} lg={2}>
                        <EventCaterogies />
                    </Grid>
                    <Grid item xs={4} md={4} lg={5}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mt:2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: '#737373',
                                textDecoration: 'none',
                            }}>
                            Promotional Events
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", maxHeight:"90vh", overflow:"scroll" }}>
                            {demoEvents.map((event, index) => (
<<<<<<< HEAD
                                <EventCard key={index}/>
=======
                                <EventCard key={index} setAddress={setAddress} />
>>>>>>> a80172eb8ba337b47a0ede9950d10063242896ef
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={6} lg={5}>
                        <MapsAPI address={state.address} />
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}
