module.exports = async ({core}, data) => {  
  console.log(data)

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
