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


