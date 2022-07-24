import { Grid } from "@mui/material";
import EventCard from "../components/EventCard";
import EventCaterogies from "../components/EventCaterogies";
import Layout from "../components/Layout";
import MapsAPI from "../components/MapsAPI";
import Sidebar from "../components/Sidebar";

export default function Home() {

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

    return (
        <Layout>
            <div className="App">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={2} lg={2}>
                        <EventCaterogies />
                    </Grid>
                    {demoEvents.map((event, index) => (
                        <Grid item xs={4} md={4} lg={4} key={index}>
                            <EventCard  />
                        </Grid>
                    ))}
                    <Grid item xs={6} md={4} lg={4}>
                        {/* <MapsAPI /> */}
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}
