import { FormPage } from '../../components'
import { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import './book-appoinments.scss';
export const BookAppoinment = () => {
    const [age1, setAge1] = useState('');
    const [age2, setAge2] = useState('');

    const handleChange1 = (event) => setAge1(event.target.value);
    const handleChange2 = (event) => setAge2(event.target.value);
    return (
        <div className="book-appoinment">
            <div className='text'>
                <h1>BOOK <span>APPOINMENT</span></h1>
                <div className="line"></div>
                <br />
            </div>
            <form method='GET' action={FormPage}>

                <div className="forms">
                    <div className='form'>
                        <TextField className='text-field' label="Patient Name" name='patient-name' />
                        <br />
                        <br />
                        <TextField className='text-field'
                            id="outlined-number"
                            label="Phone Number"
                            type="number"
                            autoComplete='off'
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div className='form'>
                        <div className="select_item">
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel >Age</InputLabel>
                                    <Select
                                        value={age1}
                                        label="Age"
                                        onChange={handleChange1}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                        <MenuItem value={30}>Forty</MenuItem>
                                        <MenuItem value={30}>Fifty</MenuItem>
                                        <MenuItem value={30}>Sixty</MenuItem>
                                        <MenuItem value={30}>Seventy</MenuItem>
                                        <MenuItem value={30}>Eighty</MenuItem>
                                        <MenuItem value={30}>Ninety</MenuItem>
                                        <MenuItem value={30}>One hundred</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <br />
                        <TextField className='text-field' label="Symptoms" />
                    </div>
                    <div className='form'>
                        <div className="select_item">
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age2}
                                        label="Age"
                                        onChange={handleChange2}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <br />
                        <TextField className='text-field' variant='outlined' type='date'>
                        </TextField>
                    </div>
                </div>
            </form>
            <br />
            <button type='submit' className="btn-submit-now">SUBMIT NOW</button>
        </div>
    )
}