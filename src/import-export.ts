import { format } from "date-fns"; //GOOD CODE
const datefns = require("date-fns"); //BAD CODE
(() => {
    let d = new Date();
    console.log(d); //2023-11-06T14:20:56.108Z

    let dateFormatted = format(d, "dd/MM/yyyy HH:mm:ss");
    console.log(dateFormatted); //06/11/2023 03:20:56

    let dateFormatted2 = datefns.format(d, "dd/MM/yyyy HH:mm:ss");
    console.log(dateFormatted2);
})();
