

let subs: number | string ="1M";
let apiRequestStatus: "pending" | "Success" | "error" = "error";
let airLineSeat: "aisle" | "window" | "middle" = "aisle";

airLineSeat = "aisle";

const orders = ["12","20"]
let currentorder: string | undefined;

for (let order of orders){

    if (order === "20"){
        currentorder = order;
        break;
    }
    currentorder = "11";
}

console.log(currentorder)





