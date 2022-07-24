import { Grid, Typography } from "@mui/material";
import EventCard from "../components/EventCard";
import EventCaterogies from "../components/EventCaterogies";
import Layout from "../components/Layout";
import MapsAPI from "../components/MapsAPI";
import Sidebar from "../components/Sidebar";
import EventDatePicker from "../components/EventDatePicker";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

export default function Home() {
    const [state, setState] = useState({ address: "" });
    const [promoEvent, setEvent] = useState([]);
    const [categories, setCategories] = useState([]);

    const getApiData = async () => {
        const response = await fetch("http://192.168.147.160:8090/event/getAllEvent", {
            method: "GET",
        });
        const result = await response.json();
        console.log(result)
        //const promoEvent = JSON.parse(result);
        setEvent(result);
    }

    const getCategories = async () => {
        const response = await fetch('').then((response) => response.json());
        setCategories(...categories, response);
    }

    useEffect(() => {
        getApiData();
    }, []);

    const demoEvents = Array(10).fill(0).map((_, i) => (
        {
            name: `Event ${i}`,
            description: "Some description",
            startDate: "",
            endDate: "",
            category: "Tech",
            likes: 10
        }
    ));

    const setAddress = (address) => {
        setState({ ...state, address });
    }


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
                                mt: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: '#737373',
                                textDecoration: 'none',
                            }}>
                            Promotional Events
                        </Typography>
                        <Box className="scrollstyler" sx={{ display: "flex", flexWrap: "wrap", maxHeight: "90vh", overflow: "scroll" }}>
                            {promoEvent.map((event, index) => (
                                <EventCard promoEvent={event} key={index} setAddress={setAddress} />
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
