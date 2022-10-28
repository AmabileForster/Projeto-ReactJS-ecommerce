function calculateTotal(totals){
    const subtotal = totals.reduce((pValue, cValue) => {
        return cValue[0] + pValue
    } , 0);
    return subtotal;
}

function calculatePromo(totals){
    const descont = totals.reduce((pValue, cValue) => {
        if(cValue[1]){
            return (cValue[0] - cValue[1]) + pValue;
        }
        return 0 + pValue;
    } , 0);
    return descont;
}


module.exports = {
    calculateTotal,
    calculatePromo,
};

