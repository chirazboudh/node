var ajaxForm = new ajaxProxy("/api/wifi")                              
 
document.addEventListener("DOMContentLoaded", function(event) {
    ajaxForm.PopulateTable (jsonToTable, handleError);
});      
 
function handleError (data) {
    $("#ajax-error-box").modal('show');
    $("#ajax-error").text("Errorcode:" + data.status + ", Message:" + data.statusText);
    console.log(data);
}
 
function jsonToTable (data) {
 
    // Clear table
    $('#wifiTable tr').slice(1).remove();
 
    //if no tbody just select your table
    var tbody = $('#wifiTable').children('tbody');
    var table = tbody.length ? tbody : $('#wifiTable');
 
    var tableString = "";
 
    for(var i in data) {
        var wifi = data[i];
 
        tableString += "" + wifi.uid
                    + "" + wifi.ssid
                    + "" + wifi.password
                    + "";
    }
    table.append(tableString);
}    
 
// Form event handlers
$('#refresh').click(function(){
    $("#ajax-error-box").hide();
    ajaxForm.PopulateTable (jsonToTable, handleError);
});