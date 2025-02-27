const dateObjectName = new Date();
const year = dateObjectName.getFullYear();
const month = dateObjectName.getMonth() + 1;
const day = dateObjectName.getDate();
console.log(year + '年' + month + '月' + day + '日');
