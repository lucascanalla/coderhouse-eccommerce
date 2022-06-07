import { initialCards } from '../data';

const getProductsWithCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let init =  initialCards.filter((data) => { 
                    return ( (data.category).toLowerCase() === category )
                })
            if (init.length > 0 ) { resolve(init)
            }else{ reject("error finding products") }
        })
    })
};

const getProducts = () => {
    return new Promise((resolve, reject) => {
        let flag = true;

        if(flag){
            setTimeout( () => {
                resolve(initialCards);
            }, 2000);
        }else{
            reject('Runtime Error')
        }
    })
}

const  getItemWithFilter =  (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let init =  initialCards.find((data) => { 
                return (data.id === parseInt(id))
                })
            if (init) { resolve(init)
            }else{ reject("error finding product") }
        })
    })
}

export { getProducts, getProductsWithCategory, getItemWithFilter };