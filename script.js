/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
let arr1 = [
  { id: 4, name: "kushal", age: "25", profession: "engineer" },
  { id: 5, name: "jayanth", age: "24", profession: "architect" },
  { id: 6, name: "sagar", age: "26", profession: "driver" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const result=arr.filter(a=>a.profession==="developer")
  const developerNames = result.map(developer => developer.name);
  console.log(developerNames);
}


function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const result=arr.filter(a=>a.profession==="developer")
  result.forEach((a)=>{
    console.log(a);
  })

}
// PrintDeveloperbyForEach()

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr);
}
// addData()

function removeAdmin() {
  //Write your code here, just console.log
  for(let i=0;i<arr.length;i++){
    if(arr[i].profession==='admin'){
      delete arr[i]
    }
  }
  console.log(arr);
}
// removeAdmin()

function concatenateArray() {
  //Write your code here, just console.log
 let newArray= arr.concat(arr1);
  console.log(newArray);
}
concatenateArray()

