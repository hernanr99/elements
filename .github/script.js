module.exports = async ({core, github}) => {  
  await core.summary
    .addHeading("Hola", 3)
    .addTable(github.event.client_payload.data)
    .write();
}
