/* Coded by Eren SOYLU @ 2016 
This frontend aims getting data from Google Spreadsheets with .getJSON method and uses that data in jQuery DataTables
*/
$(document).ready(function() {
  var gSheetArray = [];
  $.getJSON(
    "https://spreadsheets.google.com/feeds/list/1GhrcWHv4ZRWZn55LyyG1cY0dkyo8Zj0mk8F8maWBXW0/od6/public/values?alt=json",
    function(json) {
      for (var i = 0; i < json.feed.entry.length; i++) {
        var headerArray = [];
        headerArray.push(json.feed.entry[i].gsx$headline.$t);
        gSheetArray.push(headerArray);
        $("#gsContent").append(
          "<h2>" + json.feed.entry[i].gsx$headline.$t + "</h2>"
        );
        $("#gsContent").append(
          '<img src="' +
            json.feed.entry[i].gsx$header.$t +
            '" class="header img-responsive">'
        );
        $("#gsContent").append(
          '<div class="content">' + json.feed.entry[i].gsx$body.$t + '</div>'
        );
      }
      /*$("#display").DataTable({
        data: gSheetArray,
        columns: [{ title: "headline" }, { title: "header" }, { title: "body" }]
      });*/
    }
  );
});
