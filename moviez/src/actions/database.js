import firebase from '../config/Firebase';


export const GET_DATA = 'GET_DATA';

const ref = firebase.firestore().collection("users");

export const get_data = users =>{
    return{
        type:GET_DATA,
        payload:users
    }
}

export const getUsers = () => dispatch =>{
        ref.onSnapshot((querySnapshot) =>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            })
            dispatch(get_data(items));
        })
}