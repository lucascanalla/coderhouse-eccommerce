import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../utils/firebase'


const updateDiscountFirebase = async (discountId) => {
    const discountRef = db.collection('descuentos').doc(discountId);
    await discountRef.update({used: true});
}

const getDiscountCodeFirebase = async (code) => {
    const docRef =  await getDocs(
                            query(
                                collection(db, "descuentos"),
                                where('code', '==', `${code}`),
                                where('used', '==', false)
                            )
                        );

    const discountList = docRef.docs.map( (doc) => {
        let discount = doc.data();
        discount.id = doc.id;
       return discount;
    })

    return discountList[0];
}

export { getDiscountCodeFirebase, updateDiscountFirebase };