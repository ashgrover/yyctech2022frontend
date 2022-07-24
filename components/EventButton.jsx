import Button from '@mui/material/Button';
function EventButton({Desc}) {
  return (
    <div>
        <Button variant="text" sx={{color:'black', marginTop:'15px'}}>{Desc}</Button>
    </div>
  )
}

export default EventButton