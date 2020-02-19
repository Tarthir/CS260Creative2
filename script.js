document.getElementById("quotesubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const url = "https://api.kanye.rest";
    var numQuotes = document.getElementById("quoteinput").value;
    if (numQuotes === ""){
        numQuotes = 1;
    }
    if (numQuotes > 40){
        numQuotes = 40;
    }
    var quotes = "";
    var qouteIndx = 0;
    for (let index = 0; index < numQuotes; index++) {    
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                debugger
                quotes += "<h1>Kanye Quote "+ (qouteIndx++ + 1) +": </h1>";
                quotes += "<p>" + json.quote + "</p>";
                quotes += "<br>";
                // Add to qoute div
                document.getElementById("quotes").innerHTML = quotes;
            });
    }
    // Clear input box
    document.getElementById("quoteinput").value = "";
    
});
document.getElementById("clearSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    // clear the qoutes box
    clearBox("quotes");
});
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}