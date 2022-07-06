import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../utils/firebase'

const getProductsFirebase = async (categoryName) => {
    
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
       return product;
    })
    
    return productList;

}

const getItemFirebase = async (itemId) => {
    const docRef = doc(db, "productos", itemId);
    const docSnapshot = await getDoc(docRef);
    let product = docSnapshot.data();
    product.id = docSnapshot.id;
    return product;
}

const getColorsFirebase = async () => {
    const colorsSnapshot = await getDocs(collection(db, 'colores'));
    const colorsList = colorsSnapshot.docs.map( (doc) => {
        let color = doc.data();
        color.id = doc.id;
        return color;
    })

    return colorsList;
}

export { getProductsFirebase, getItemFirebase, getColorsFirebase };