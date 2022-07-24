import { Grid } from "@mui/material";
import EventCard from "../components/EventCard";
import EventCaterogies from "../components/EventCaterogies";
import Layout from "../components/Layout";
import MapsAPI from "../components/MapsAPI";
import Sidebar from "../components/Sidebar";
import EventDatePicker from "../components/EventDatePicker";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <Layout>
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={12} md={2} lg={2}>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <EventCaterogies />
              <EventDatePicker />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <EventCard />
          </Grid>
          <Grid item xs={6} md={4} lg={4}>
            {/* <MapsAPI /> */}
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
