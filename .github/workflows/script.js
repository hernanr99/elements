module.exports = async ({core}, data) => {  
  console.log(data);
  
  const keys = Object.keys(data);
  keys.forEach(a =>{
    if(a.includes("Summary")){
      const suiteName = a.split("_")[1];
      const browser = a.split("_")[2];
      convertToArray({core}, data[suiteName], suiteName, browser);
    }
  });
  await convertToArray({core}, data.Reference);
}

async function convertToArray({core}, data, suiteName, browser){
  const data = data.replaceAll('[', '');
  const data = data.replaceAll('"', '');
  const array = data.split("],");
  for (i=0;i<array.length;i++) { 
    array[i] = array[i].replaceAll("]]", "");
    array[i] = array[i].split(",");
  }
  console.log(array);
  
   const header = suiteName ? `${browser} - ${suite}` : "References";
    
  await core.summary
  .addHeading(header, 3)
  .addTable(array)
  .write()
}
