module.exports = async ({core}, data) => {
    if(data.Reference)
      await convertToArray({core}, data.Reference, null, null);
  
    const keys = Object.keys(data);
    keys.forEach(async a =>{
      if(a.includes("Summary")){
        const suiteName = a.split("_")[1];
        const browser = a.split("_")[2];
        await convertToArray({core}, data[a], suiteName, browser);
      }
      if(a.includes("Links")){
        await addLinks({core}, data[a]);
      }
    });
    
    await core.summary.write();
  }

  async function addLinks({core}, data){
    console.log(data);
    if(!data)
       return;
    
    for (i=0;i<data.length;i++) { 
        await core.summary.addLink(data[i][0], data[i][1]);
    }
    
  }
  
  async function convertToArray({core}, data, suiteName, browser){
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
      
    await core.summary
    .addHeading(header, 3)
    .addTable(array);
  }
