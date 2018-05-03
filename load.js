/* Coded by Eren SOYLU @ 2016 
This frontend aims getting data from Google Spreadsheets with .getJSON method and uses that data in jQuery DataTables
*/
$(document).ready(function() {
  var tableArray = [];
  /* First parameter in .getJSON method is published google spreadsheet's modified link for getting data formed with JSON. Tricky key is putting key between link template over here : https://spreadsheets.google.com/feeds/list/PUT-KEY_HERE/od6/public/values?alt=json  | You might be get key when you published your data spreadsheet. The key inside the URL. After getting JSON object you can investigate which key represent data. In this example json.feed.entry is an array that includes my data. Your solution should look similar like that.
      */
  $.getJSON(
    "https://spreadsheets.google.com/feeds/list/1GhrcWHv4ZRWZn55LyyG1cY0dkyo8Zj0mk8F8maWBXW0/od6/public/values?alt=json",
    function(json) {
      for (var i = 0; i < json.feed.entry.length; i++) {
        var iArray = [];
        iArray.push(json.feed.entry[i].gsx$headline.$t);
        //iArray.push('<a href="' + json.feed.entry[i].gsx$url.$t + '">URL</a>');
        tableArray.push(iArray);
        $("#dataContent").append(
          "<h2>" + json.feed.entry[i].gsx$headline.$t + "</h2>"
        );
        $("#dataContent").append(
          '<img src="' +
            json.feed.entry[i].gsx$header.$t +
            '" class="img2 img-responsive">'
        );
      }
      $("#example").DataTable({
        data: tableArray,
        columns: [{ title: "headline" }, { title: "header" }, { title: "body" }]
      });
    }
  );
});
