module.exports = async ({core}, data) => {  
  console.log(data);
  await convertToArray({core}, data.Reference);
  await convertToArray({core}, data.VODSpeed);
}

async function convertToArray({core}, data){
  const otro2 = data.replaceAll('[', '');
  const otro3 = otro2.replaceAll('"', '');
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
