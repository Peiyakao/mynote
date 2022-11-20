const phone_price = 1200;
const Tax_Rate = 0.05;
const spending_threshold = 8000;
const accessory_price = 100;
const Total_price = 0;
var Cellphone_Num = 0;
var accessory_Num = 0;
function calculateTax(Cellphone_Num) { return Cellphone_Num * Tax_Rate };

function Calculator() {
    const bank_account_balance = prompt("Your spending_threshold?");
    phone_price = phone_price * (1 + Tax_Rate);
    accessory_price = accessory_price * (1 + Tax_Rate);
    Total_price = (Cellphone_Num * phone_price + accessory_Num * accessory_price) * Tax_Rate;
    while (spending_threshold <= phone_price) {
        Cellphone_Num += 1;
        spending_threshold -= phone_price;
        if (spending_threshold - accessory_price >= 0) {
            accessory_Num += 1;
            spending_threshold -= accessory_Num;
        }
    }
    if (Total_price < bank_account_balance) {
        console.log("you can afford $( Cellphone_Num) Cellphone and $(accessory_Num) accessory.")
    } else console.log("you can't afford Cellphone.")
}
function foo(x) {
    x = x + 1;
    console.log(x);
}
var a = 2;
var b = new Number(a);
foo(a);
console.log(b);
console.log(a);
