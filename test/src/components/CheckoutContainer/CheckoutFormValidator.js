import validateJson from '../../utils/utils';

export default function validator(value, target) {
    let error = {};

    switch (target) {
        case 'mail':        
            error = validateDouble(value, 'Email');
            break;
        case 'phone':
            error = validateDouble(value, 'Telefono');
            break;
        case 'code_phone':
            error = validateDouble(value, 'Codigo Telefono');
            break;
        case 'address_number':
            error = validateDouble(value, 'Numero')
            break;   
        case 'name':
            error = validateRequired(value, 'Nombre y Apellido')
            break; 
        case 'address':
            error = validateRequired(value, 'Direccion')
            break; 
        case 'province':
            error = validateRequired(value, 'Provincia')
            break;
        case 'city':
            error = validateRequired(value, 'Ciudad')
            break;  
    }
    return error;
}

function validateDouble(value, target) {
    let errors = validateRequired(value, target);
    let re = '';
    target === 'Email' ? re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ : re = /^[0-9]*$/
    let result = re.test(String(value).toLowerCase());
    if (!result) { 
        errors = {
            [target] : `${target} Invalido`
        }
    } 
    return errors;
}

function validateRequired(value, target) {
    let errors = {};
    if (value.length == 0) {
        errors = {
            [target]: `${target} es Requirido`
        }
    }
    return errors;
}
