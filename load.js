$(document).ready(function() {
      var gSheetArray = [];
      //https://docs.google.com/spreadsheets/d/e/2PACX-1vQf7ogxoXQsr6EJgq7FYRtA9Knsp6PZCLuVunlW53sNdUTwh3XyV7kIKcJ_rcr8omofhWvRG-iBOREo/pubhtml
      $.getJSON('https://spreadsheets.google.com/feeds/list/1GhrcWHv4ZRWZn55LyyG1cY0dkyo8Zj0mk8F8maWBXW0/od6/public/values?alt=json', function(json) {
        for (var i = 0; i < json.feed.entry.length; i++) {
          var iArray = [];
          iArray.push(json.feed.entry[i].gsx$name.$t);
          //iArray.push('<a href="'+json.feed.entry[i].gsx$url.$t+ '">header</a>');
          gSheetArray.push(iArray);
          $("#dataContent").append("<h2>" + json.feed.entry[i].gsx$headline.$t + "</h2>");
          $("#dataContent").append("<p class="body">" + json.feed.entry[i].gsx$body.$t + "</p>");
          $("#dataContent").append('<img src="' + json.feed.entry[i].gsx$header.$t + '" class="img2 img-responsive">');
          
        }
        $('#example').DataTable( {
        data: gSheetArray,
        columns: [
            { title: "headline" },
            { title: "header" },
            { title: "body" }
        ]
    } );
      });
    
});
