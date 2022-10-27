module.exports = async ({core}, data) => {  
  console.log(data);
  const algo = {
    results: '"[[{\\"data\\":\\"Symbol\\",\\"header\\":true},{\\"data\\":\\"Description\\",\\"header\\":true}],[\\":heavy_check_mark:\\",\\"Test passed\\"],[\\":x:\\",\\"Test failed\\"],[\\":no_entry_sign:\\",\\"Not tested\\"]]"'
  }
  const otro = algo.results.replaceAll('\\', '');
  console.log(otro);
  
  await core.summary
    .addHeading(`Reference`, 3)
    .addTable([
      [{ data: "Symbol", header: true }, { data: "Description", header: true }],
      [":heavy_check_mark:", "Test passed"],
      [":x:", "Test failed"],
      [":no_entry_sign:", "Not tested"]
    ])
    .write()
}
