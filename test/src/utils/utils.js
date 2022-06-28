const validateJson = [
    {
        input: 'mail',
        validateFunction: 'validateEmail'
    },
    {   
        input: 'phone',
        validateFunction: 'validateNumber(value, target)'
    },
    {
        input: 'code_phone',
        validateFunction: 'validateNumber'
    },
    {
        input: 'address_number',
        validateFunction: 'validateNumber'
    },
    {
        input: 'name',
        validateFunction: 'validateRequired(value, target)'
    },
    {
        input: 'address',
        validateFunction: 'validateRequired'
    },
    {
        input: 'province',
        validateFunction: 'validateRequired'
    },
    {
        input: 'city',
        validateFunction: 'validateRequired'
    }
]

export default validateJson