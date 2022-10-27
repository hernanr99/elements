module.exports = async ({core}, data) => {  
  console.log(data)
  var obj = JSON.parse(data);
  await core.summary
    .addHeading("goliii", 3)
    .addTable(obj.results.Reference)
    .write();
}
