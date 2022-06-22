import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { citiesMock, statesMock } from '../../data';


const CheckoutDeliverySelect = ({
        setProvince,
        cities,
        setCities, 
        handleFormChange
    }) => {

    const handleChange = (e) => {
        if(e.target.name === 'province'){
            setCities(citiesMock.filter((city) => {
                return (city.state === e.target.value)
            }))
        }

        handleFormChange(e)
    }

    return (
        <>
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Provincia</InputLabel>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                name='province'
                onChange={handleChange}
                input={<OutlinedInput label="Provincia" />}
            >
            {statesMock.map((state) => (
                <MenuItem
                    key={state}
                    value={state}
                >
                    {state}
                </MenuItem>
            ))}
            </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Localidad</InputLabel>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                name='city'
                onChange={handleChange}
                input={<OutlinedInput label="Localidad" />}
            >
            {cities && cities.map((city) => (
                <MenuItem
                    key={city.name}
                    value={city.name}
                >
                    {city.name}
                </MenuItem>
            ))}
            
            </Select>
        </FormControl>
        </>
    );
};

export default CheckoutDeliverySelect;