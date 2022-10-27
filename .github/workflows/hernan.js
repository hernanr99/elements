module.exports = async ({core}, data) => {  
  console.log(data);
  const algo = {
    results: '"[\\":heavy_check_mark:\\",\\"Test passed\\"],[\\":x:\\",\\"Test failed\\"],[\\":no_entry_sign:\\",\\"Not tested\\"]"'
  }
  const otro = algo.results.replaceAll('\\', '');
  const otro2 = otro.replaceAll('[', '');
  console.log(otro2);
  
  const array = otro2.split("],");
  for (i=0;i<array.length;i++) { 
    array[i].replaceAll('"', '');
    array[i] = array[i].split(",")
  }
  console.log(array);

  await core.summary
    .addHeading(`Reference`, 3)
    .addTable([array])
    .write()
}
