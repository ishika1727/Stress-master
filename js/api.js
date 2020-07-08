
function diet() {
    document.getElementById("form").addEventListener("click", function (e) { e.preventDefault() });
    var cal = document.getElementById("cal").value;
    var time = document.getElementById("timespan").value;
    var diet = document.getElementById("diet").value;
    var exclude = document.getElementById("exclude").value;
    console.log(cal);
    console.log(time);
    console.log(diet);
    console.log(exclude);
    var url = "https://api.spoonacular.com/mealplanner/generate?apiKey=ef4c92c9ef5d45e489e4f995a94055f3&timeFrame=" + time + "&targetCalories=" + cal + "&diet=" + diet + "&exclude=" + exclude + "";
    var settings = {
        "url": url,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Cookie": "__cfduid=dd11996d7deb2c7b62afad192c91560ff1594244494"
        },
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        var res=response;
        for (let i in res.week)
        {
            console.log(i);
            // document.getElementById(i).innerHTML+=
        }
    });
}



