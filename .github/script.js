module.exports = async ({core, data}) => {  
  await core.summary
    .addHeading("Hola", 3)
    .addTable(data)
    .write();
}
