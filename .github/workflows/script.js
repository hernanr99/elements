module.exports = async ({core}, data) => {  
  await core.summary
    .addHeading("goliii", 3)
    .addTable(data)
    .write();
}
