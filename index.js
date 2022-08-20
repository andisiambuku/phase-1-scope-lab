// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = "not bob";
}

function overwriteBestCustomer(){
    return bestCustomer="maybe bob";
}

const leastFavoriteCustomer = "pat";
function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer ="not pat";
}