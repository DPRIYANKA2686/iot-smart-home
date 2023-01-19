import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './RoomBtn.css'

export default function RoomBtn(props) {
  return (
    <div className='customRoom'>
        <Stack direction="row" spacing={2}>
        <h3 className='room'>{props.room}</h3>
        <Button className='btn' variant="contained" color="success">
            <a className='switch' href={'http://192.168.1.10/'+props.apiOn}>ON</a>
        </Button>
        <Button className='btn' variant="outlined" color="error">
            <a className='switch' href={'http://192.168.1.10/'+props.apiOff}>OFF</a>
        </Button>

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
