import { initialCards } from '../data';
import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../utils/firebase'

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

const getProductsFirebase = async (categoryName) => {
    
    console.log(categoryName)
    const productSnapshot = await getDocs(
                                            categoryName ?
                                                query(collection(db, "productos"), 
                                                where('category', '==', `${categoryName}`))
                                            : 
                                                collection(db, 'productos')
                                        );
    const productList = productSnapshot.docs.map( (doc) => {
        let product = doc.data();
        product.id = doc.id;
        //{...doc.data(), id: doc.id}
       console.log("product", product)
       //console.log("doc", doc)
       return product;
    })
    
    return productList;

}

const getItemFirebase = async (itemId) => {
    const docRef = doc(db, "productos", itemId);
    const docSnapshot = await getDoc(docRef);
    let product = docSnapshot.data();
    product.id = docSnapshot.id;
    console.log("product", product)
    //console.log("doc", doc)
    return product;
    

}

const saveOrderFirebase = async (order) => {
    const orderFirebase = collection(db, 'ordenes');
    const orderDoc = await addDoc(orderFirebase, order)
    console.log(orderDoc)

}
export { getProducts, getProductsWithCategory, 
        getItemWithFilter, getProductsFirebase, getItemFirebase,
        saveOrderFirebase };