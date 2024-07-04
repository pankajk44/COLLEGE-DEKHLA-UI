export function addCommas(number:any) {
    // Convert the number to a string and use a regular expression to add commas
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}