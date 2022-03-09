/*
    ? This is the regular form os returnning plain objects
    ? when we work only with synchronous code we need
    ? to return plain objects but when using
    ! Redux-thunk
    ? Instead to return an object we can return a callback
    ? that the middleware will take care to stop

*/
export const depositMoney = (amount) => {
    return {
        type: 'Increase',
        payload: amount

    }
}
export const withdrawMoney = (amount) => {
    return {
        type: 'Decrease',
        payload: amount
    }
}


// export const depositMoney = (amount) => {
//     return (dispacth) => {
//         dispacth({
//             type: "deposit",    
//             payload: amount
//         })
//     }
// }
// export const withdrawMoney = (amount) => {
//     return (dispacth) => {
//         dispacth({
//             type: "deposit",    
//             payload: amount
//         })
//     }
// }

