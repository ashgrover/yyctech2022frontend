import { Grid } from "@mui/material";
import EventCard from "../components/EventCard";
import EventCaterogies from "../components/EventCaterogies";
import Layout from "../components/Layout";
import MapsAPI from "../components/MapsAPI";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <Layout>
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={6} md={6} lg={6}>
          <EventCard />
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <MapsAPI />
        </Grid>
        <EventCaterogies />

      </Grid>
    </div>
  </Layout>
  )
}
