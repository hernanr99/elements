module.exports = async ({core}, data) => {  
  console.log(data);
  
  const algo2 = data.Reference.replaceAll('"data"', 'data');
  const algo3 = algo2.replaceAll('"header"', 'header');
  
  const otro2 = algo3.replaceAll('[', '');
  const array = otro2.split("],");
  for (i=0;i<array.length;i++) { 
    array[i] = array[i].replaceAll("]]", "")
    array[i] = array[i].split(",")
  }
  console.log(array);

  await core.summary
    .addHeading(`Reference`, 3)
    .addTable(array)
    .write()
  
}

