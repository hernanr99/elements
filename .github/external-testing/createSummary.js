module.exports = async ({core}, data) => {
    if(data.Reference)
        convertToArray({core}, data.Reference, null, null);
    
    let keys = Object.keys(data);
    for (i=0;i< keys.length;i++) {
      if(keys[i].includes("Summary")){
        const suiteName = keys[i].split("_")[1];
        const browser = keys[i].split("_")[2];
        convertToArray({core}, data[keys[i]], suiteName, browser);
        const linkData = keys[i].replaceAll("Summary", "Links");
        addLinks({core}, data[linkData]);
      }
    }
    
    await core.summary.write();
  }

  function addLinks({core}, data){
    console.log(data);
    if(!data)
       return;
    data = data.replaceAll('[', '');
    data = data.replaceAll('"', '');
    const array = data.split("],");
    for (i=0;i<array.length;i++) { 
      array[i] = array[i].replaceAll("]]", "");
      array[i] = array[i].split(",");
    }
      
    for (i=0;i<array.length;i++) { 
        core.summary.addLink(array[i][0], array[i][1]);
    }
    
  }
  
  function convertToArray({core}, data, suiteName, browser){
    if(!data)
       return;
    
    data = data.replaceAll('[', '');
    data = data.replaceAll('"', '');
    const array = data.split("],");
    for (i=0;i<array.length;i++) { 
      array[i] = array[i].replaceAll("]]", "");
      array[i] = array[i].split(",");
    }
    
    const header = suiteName ? `${browser} - ${suiteName}` : "References";
      
    core.summary.addHeading(header,3).addTable(array);
  }
