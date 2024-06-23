// จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str

let str = "31 45 12 67 34 86 23 37 19 41";

const arrStr = str.split(" ").map(Number);
const numberLower40 = arrStr.filter((arr) => arr < 40);
console.log(numberLower40.reduce((sum, arr) => sum + arr));
