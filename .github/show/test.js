const core = require('@actions/core');

async function processResultsAndPostToSummary() {
  let table = [
    [{ data: "Test #", header: true }, { data: 'VIDEO_JS_7', header: true }, { data: 'MUX', header: true }, { data: 'HLS_JS_1_1', header: true }, { data: 'THEO', header: true }]
  ];
  // results.forEach(function (test) {
  //   table.push([test.name, test.result['VIDEO_JS_7'], test.result['MUX'], test.result['HLS_JS_1_1'], test.result['THEO']]);
  // })

  await core.summary
    .addHeading('Esto es una prueba', 3)
    .addTable(table)
    .write();
}

processResultsAndPostToSummary();