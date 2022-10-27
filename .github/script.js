module.exports = async ({core}, data) => {  
  var obj = JSON.parse(data);
  await core.summary
    .addHeading("goliii", 3)
    .addTable(obj.Reference)
    .write();
}
