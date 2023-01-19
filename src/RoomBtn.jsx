import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './RoomBtn.css'

export default function RoomBtn(props) {
  return (
    <div className='customRoom'>
        <Stack direction="row" spacing={2}>
        <h3 className='room'>{props.room}</h3>
        
        <a className='switch' target="_blank" href={'http://192.168.1.10/'+props.apiOn}>

            <Button className='btn' variant="contained" color="success">
                ON
            </Button>
            
        </a>
        
        <a className='switch' target="_blank" href={'http://192.168.1.10/'+props.apiOff}>
            <Button className='btn' variant="outlined" color="error">
                OFF
            </Button>
        </a>

        {/* <Button className='btn' onClick={() => {
            fetch('http://192.168.1.10/'+props.apiOn)
            console.log('http://192.168.1.10/'+props.apiOn)
        }} variant="contained" color="success">
            ON
        </Button>
        
        <Button className='btn' onClick={() => {
            fetch('http://192.168.1.10/'+props.apiOff)
            console.log('http://192.168.1.10/'+props.apiOff)
        }} variant="outlined" color="error">
            OFF
        </Button>
         */}

        </Stack>
    </div>
  );
}
