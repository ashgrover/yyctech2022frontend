import Stack from '@mui/material/Stack';
import EventButton from "./EventButton";
import Box from '@mui/material/Box';
const categories = ['Business', 'Food', 'Health', 'Music', 'Charity&Causes', 'Community']
function EventCaterogies() {
    return (
        <div style={{margin:"10px 10px"}}>
            {categories.map((category) => (
                <Box key={category} sx={{ width: '100%' }}>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <EventButton Desc={category} />

                    </Stack>
                </Box>
            ))}
        </div>
    )
}

export default EventCaterogies