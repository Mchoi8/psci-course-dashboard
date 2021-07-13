


// Initialize the client
var client = require('smartsheet');
var smartsheet = client.createClient({
  accessToken: 'J8G6bG5tjqULnTYZd8Jhyyc4IL2K7mh3xBpFU',
  logLevel: 'info'
});

// The `smartsheet` variable now contains access to all of the APIs

// Set queryParameters for `include` and pagination
var options = {
  queryParameters: {
    include: "attachments",
    includeAll: true
  }
};

// List all sheets
smartsheet.sheets.listSheets(options)
  .then(function (result) {
    var sheetId = 0;                // Choose the correct sheet
    var sheetListLen = result.data.length;

    for (let i = 0; i < sheetListLen; i++) {
        if( result.data[i].name == 'Curriculum Planning Survey'){
            sheetId = result.data[i].id;
        }
    }

    // Load one sheet
    smartsheet.sheets.getSheet({id: sheetId})
      .then(function(sheetInfo) {
        
        console.log(sheetInfo);
      })
      .catch(function(error) {
        console.log(error);
      });
  })
  .catch(function(error) {
    console.log(error);
  });



const getRowData = (sheetInfo) => {

    
};