const createCsvWriter = require('csv-writer').createObjectCsvWriter;  
let data = [];

const reverseArray = (array)=>{
    let newArray = [], l = array.length; 
    for(k=0; k<l; k++){
        newArray.push(array.pop());
    }
    return newArray;
}

const populateArr = (length)=>{
    let tempArr = [];
    for(let j=0; j<length; j++){
        tempArr.push(Math.ceil(Math.random()*10));
    }
    return tempArr;
}

for(let i=50000; i<=1000000; i+=50000){
    mainArr = populateArr(i);
    arrSize = mainArr.length;
    let hrstart = process.hrtime();
    // mainArr.reverse()
    reverseArray(mainArr);
    let hrend = process.hrtime(hrstart);
    data.push({arrSize: arrSize, reverse: hrend[1]});
}
console.log(data);

const csvWriter = createCsvWriter({  
    path: 'timing_record.csv',
    header: [
        {id: 'arrSize', title: 'Array size'},
        {id: 'reverse', title: 'Reverse'}
    ]
});
csvWriter  
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));

  module.exports = {}