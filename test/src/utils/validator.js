import validator from 'validator';

export default function validatorCustom(value, target, compare) {
    let error = {};

    switch (target) {
        case 'email':        
            error = validateDouble(value, 'Email');
            break;
        case 'repeat_email':        
            error = validateCheckEmails(value, compare, 'Emails');
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
        case 'zip_code':
            error = validateDouble(value, 'Codigo Postal');
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
        case 'password':
            error = validateRequired(value, 'Password')
            break;
        default :
            break;
    }
    return error;
}

function validateDouble(value, target) {
    let errors = target === 'Departamento' || target === 'Piso' ? validateRequired(value, target) : {};
    let result = target === 'Email' ? validator.isEmail(value) : validator.isNumeric(value)
    errors = !result && {[target] : `${target} Invalido`}
    return errors;
}

function validateCheckEmails(value, compare, target) {
    let errors = !validator.equals(value, compare) && {[target] : `${target} deben coincidir`} 
    return errors;
}

function validateRequired(value, target) {
    let errors = validator.isEmpty(value) ? {[target]: `${target} es Requirido`} : {}
    return errors;
}
