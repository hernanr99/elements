module.exports = async ({core}, data) => {  
  console.log(data);
  convertToArray(data.Reference);
  
}

function convertToArray(data){
  const otro2 = algo3.replaceAll('[', '');
  const otro3 = algo2.replaceAll('"', '');
  const array = otro3.split("],");
  for (i=0;i<array.length;i++) { 
    array[i] = array[i].replaceAll("]]", "");
    array[i] = array[i].split(",");
  }
  console.log(array);
  
  await core.summary
  .addHeading(`Reference`, 3)
  .addTable(array)
  .write()
}
