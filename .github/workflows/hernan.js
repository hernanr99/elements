module.exports = async ({core}, data) => {  
  const algo = {
    chromeT027VIDEO_JS_6: 'true',
    chromeT027VIDEO_JS_7: 'true',
    chromeT027MUX: 'true',
    chromeT027HLS_JS_1_0: 'true',
    chromeT027HLS_JS_1_1: 'true',
    chromeT027HLS_JS_1_2: 'true',
    chromeT027THEO: 'true',
    table: '{"table":[[{"data":"Test #","header":true},{"data":"VIDEO_JS_7","header":true},{"data":"MUX","header":true},{"data":"HLS_JS_1_1","header":true},{"data":"THEO","header":true}],["T027",":no_entry_sign:",":no_entry_sign:",":no_entry_sign:",":no_entry_sign:"]],"header":"Chrome","suite":"VODSpeed"}',
    Reference: '[[{"data":"Symbol","header":true},{"data":"Description","header":true}],[":heavy_check_mark:","Test passed"],[":x:","Test failed"],[":no_entry_sign:","Not tested"]]'
  }

  
  const algo2 = algo.Reference.replaceAll('"data"', 'data');
  const algo3 = algo2.replaceAll('"header"', 'header');
  
  const otro2 = algo3.replaceAll('[', '');
  const array = otro2.split("],");
  for (i=0;i<array.length;i++) { 
    array[i] = array[i].replaceAll("]]", "")
    array[i] = array[i].split(",")
  }
  console.log(array);

  await core.summary
    .addHeading(`Reference`, 3)
    .addTable(array)
    .write()
}
