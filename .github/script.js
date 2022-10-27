module.exports = async ({core}, data) => {  
  console.log(data)

  await core.summary
    .addHeading(data, 3)
    .addTable(table)
    .write();
}
