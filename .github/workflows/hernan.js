module.exports = async ({core}) => {  
  const data = {
    chromeT027VIDEO_JS_6: 'true',
    chromeT027VIDEO_JS_7: 'true',
    chromeT027MUX: 'true',
    chromeT027HLS_JS_1_0: 'true',
    chromeT027HLS_JS_1_1: 'true',
    chromeT027HLS_JS_1_2: 'true',
    chromeT027THEO: 'true',
    Summary_VODSpeed_chrome: '[["Test #","VIDEO_JS_7","MUX","HLS_JS_1_1","THEO"],["T027",":no_entry_sign:",":heavy_check_mark:",":no_entry_sign:",":no_entry_sign:"]]',
    Reference: '[["Symbol","Description"],[":heavy_check_mark:","Test passed"],[":x:","Test failed"],[":no_entry_sign:","Not tested"]]',
    firefoxT027VIDEO_JS_6: 'true',
    firefoxT027VIDEO_JS_7: 'true',
    firefoxT027MUX: 'true',
    firefoxT027HLS_JS_1_0: 'true',
    firefoxT027HLS_JS_1_1: 'true',
    firefoxT027HLS_JS_1_2: 'true',
    firefoxT027THEO: 'true',
    Summary_VODSpeed_firefox: '[["Test #","VIDEO_JS_7","MUX","HLS_JS_1_1","THEO"],["T027",":no_entry_sign:",":heavy_check_mark:",":no_entry_sign:",":no_entry_sign:"]]'
  }
  
  const keys = Object.keys(data);
  console.log(keys);
  keys.forEach(async a =>{
    if(a.includes("Summary")){
      console.log(a);
      console.log("hola");
      const suiteName = a.split("_")[1];
      const browser = a.split("_")[2];
      await convertToArray({core}, data[a], suiteName, browser);
    }
  });
  await convertToArray({core}, data.Reference, null, null);
}

async function convertToArray({core}, data, suiteName, browser){
  console.log("entra con " + suiteName);
  
  data = data.replaceAll('[', '');
  data = data.replaceAll('"', '');
  const array = data.split("],");
  for (i=0;i<array.length;i++) { 
    array[i] = array[i].replaceAll("]]", "");
    array[i] = array[i].split(",");
  }
  
   const header = suiteName ? `${browser} - ${suiteName}` : "References";
    
  await core.summary
  .addHeading(header)
  .addTable(array)
  .write()
}
