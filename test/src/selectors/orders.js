import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../utils/firebase'

const saveOrderFirebase = async (order) => {
    const orderFirebase = collection(db, 'ordenes');
    const orderDoc = await addDoc(orderFirebase, order)
    return orderDoc.id
}

const getOrdersFirebase = async (userEmail) => {
    const ordersSnapshot =  await getDocs (query(collection(db, "ordenes"), 
                                                    where('buyer.email', '==', `${userEmail}`)
                                                )
                                            )
    
    const orderList = ordersSnapshot.docs.map( (doc) => {
        let order = doc.data();
        order.id = doc.id;
        return order;
    })

    return orderList;
}

export { saveOrderFirebase, getOrdersFirebase };