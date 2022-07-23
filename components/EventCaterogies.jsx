import Stack from '@mui/material/Stack';
import EventButton from "./EventButton";
import Box from '@mui/material/Box';
const categories = ['Business', 'Food&Drink', 'Health', 'Music', 'Charity&Causes', 'Community']
function EventCaterogies() {
  return (
    <>
     {categories.map((category) => (
      <Box sx={{ width: '100%' }}>
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
    </>
  )
}

export default EventCaterogies