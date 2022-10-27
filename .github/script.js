module.exports = async ({github, context, core}) => {
  let table = [
    [{ data: "Test #", header: true }, { data: 'VIDEO_JS', header: true }, { data: 'MUX', header: true }, { data: 'HLS_JS', header: true }, { data: 'THEO', header: true }]
  ];
  
  await core.summary
    .addHeading("Hola", 3)
    .addTable(table)
    .write();
}
