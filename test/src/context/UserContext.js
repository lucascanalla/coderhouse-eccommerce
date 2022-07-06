import { createContext, useState } from "react";
import { getOrdersFirebase } from "../selectors/orders";
import { logInWithEmailAndPassword, logOut } from "../selectors/users";
import { auth } from '../utils/firebase'

const UserContext = createContext();

const UserProvider = ({children}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || '');

    const login = async (values) => {
        const {email, password} = values;
        logInWithEmailAndPassword(email, password)
        .then(() => {
            console.log("User Logged")
        })
        .catch((err) => {
            console.log(err)
        })

    }

    const logout = () => {
        logOut();
        setUser('')
    }

    const authListener = async () => {
        auth.onAuthStateChanged((user) => {
            //console.log("user: ", user)
            if (user) {
                setUser({email: user.email, uid: user.uid});
                localStorage.setItem('user', JSON.stringify({email: user.email, uid: user.uid}))
            } else {
                setUser("");
            }
        });
    };
    
    const getOrdersFromUser = async () => {
        const ordersList = await getOrdersFirebase(user.email)
        console.log("orderList", ordersList)
        // ordersList
        //     .then(res => {return res})
        //     .catch(err => console.log(err))

        return ordersList;
    }        
        
    const data = {
        user,
        login,
        logout,
        authListener,
        getOrdersFromUser        
    }
    
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext ;
export { UserProvider }