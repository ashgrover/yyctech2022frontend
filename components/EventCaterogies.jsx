import Stack from '@mui/material/Stack';
import EventButton from "./EventButton";
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
const categories = ['Business', 'Food', 'Health', 'Music', 'Charity&Causes', 'Community']
function EventCaterogies() {
    return (
        <Container className='eventCategories' 
        sx={{display:{xs:'none', sm:'none', lg:'block'},
        m:2,
    }}>
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
        </Container>
    )
}

export default EventCaterogies