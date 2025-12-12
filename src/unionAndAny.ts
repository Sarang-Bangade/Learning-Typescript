/* We can make our custom variable that can be sutaible for both the 
variable declarations or many as per the examples given below 

We can also set what data variable can hold 

*/

let subs: number | string ="1M";     /* here subs is the variable and Number and 
String is the type of vaiables that a single variable sub can hold*/


let apiRequestStatus: "pending" | "Success" | "error" = "error";  /* this is union */
let airLineSeat: "aisle" | "window" | "middle" = "aisle";

airLineSeat = "aisle";

const orders = ["12","20"]
let currentorder: string | undefined;

for (let order of orders){

    if (order === "12"){
        currentorder = order;
        break;
    }
    currentorder = "11";
}
console.log(currentorder)





