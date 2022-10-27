module.exports = async ({core}, data) => {  
  console.log(data);
  console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA);
  console.log(data.VODSpeed);
  console.log(data.Reference);
  const algo = data.Reference;
  const otro = algo.results.replaceAll('\\', '');
  const otro3 = otro.replaceAll('"', '');
  const otro2 = otro3.replaceAll('[', '');
  console.log(otro2);
  
  const array = otro2.split("],");
  for (i=0;i<array.length;i++) { 
    array[i] = array[i].split(",")
  }
  console.log(array);

  await core.summary
    .addHeading(`Reference`, 3)
    .addTable(array)
    .write()
}
  
  
  
  await core.summary
    .addHeading(`Reference`, 3)
    .addTable([array])
    .write()
}
