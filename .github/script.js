module.exports = async ({core}, data) => {  
  console.log(data)
  let table = [
    [{ data: "Test #", header: true }, { data: 'VIDEO_JS_7', header: true }, { data: 'MUX', header: true }, { data: 'HLS_JS_1_1', header: true }, { data: 'THEO', header: true }]
  ];
  
  await core.summary
    .addHeading(data, 3)
    .addTable(table)
    .write();
}
