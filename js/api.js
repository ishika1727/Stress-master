
function diet() {
    document.getElementById("form").addEventListener("click", function (e) { e.preventDefault() });
    var cal = document.getElementById("cal").value;
    var diet = document.getElementById("diet").value;
    var exclude = document.getElementById("exclude").value;
    console.log(cal);
    console.log(diet);
    console.log(exclude);
    var url = "https://api.spoonacular.com/mealplanner/generate?apiKey=ef4c92c9ef5d45e489e4f995a94055f3&timeFrame=week&targetCalories=" + cal + "&diet=" + diet + "&exclude=" + exclude + "";
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
        var res = response;
        document.getElementById("monday").innerHTML += "<td><a href='" + res.week.monday.meals[0].sourceUrl + "'>" + res.week.monday.meals[0].title + "</a></td><td><a href='" + res.week.monday.meals[1].sourceUrl + "'>" + res.week.monday.meals[1].title + "</a></td><td><a href='" + res.week.monday.meals[2].sourceUrl + "'>" + res.week.monday.meals[2].title + "</a></td>";
        document.getElementById("monday").innerHTML += "<td>" + res.week.monday.nutrients.calories + "</td><td>" + res.week.monday.nutrients.protein + "</td><td>" + res.week.monday.nutrients.fat + "</td><td>" + res.week.monday.nutrients.carbohydrates + "</td>";

        document.getElementById("tuesday").innerHTML += "<td><a href='" + res.week.tuesday.meals[0].sourceUrl + "'>" + res.week.tuesday.meals[0].title + "</a></td><td><a href='" + res.week.tuesday.meals[1].sourceUrl + "'>" + res.week.tuesday.meals[1].title + "</a></td><td><a href='" + res.week.tuesday.meals[2].sourceUrl + "'>" + res.week.tuesday.meals[2].title + "</a></td>";
        document.getElementById("tuesday").innerHTML += "<td>" + res.week.tuesday.nutrients.calories + "</td><td>" + res.week.tuesday.nutrients.protein + "</td><td>" + res.week.tuesday.nutrients.fat + "</td><td>" + res.week.tuesday.nutrients.carbohydrates + "</td>";

        document.getElementById("wednesday").innerHTML += "<td><a href='" + res.week.wednesday.meals[0].sourceUrl + "'>" + res.week.wednesday.meals[0].title + "</a></td><td><a href='" + res.week.wednesday.meals[1].sourceUrl + "'>" + res.week.wednesday.meals[1].title + "</a></td><td><a href='" + res.week.wednesday.meals[2].sourceUrl + "'>" + res.week.wednesday.meals[2].title + "</a></td>";
        document.getElementById("wednesday").innerHTML += "<td>" + res.week.wednesday.nutrients.calories + "</td><td>" + res.week.wednesday.nutrients.protein + "</td><td>" + res.week.wednesday.nutrients.fat + "</td><td>" + res.week.wednesday.nutrients.carbohydrates + "</td>";

        document.getElementById("thursday").innerHTML += "<td><a href='" + res.week.thursday.meals[0].sourceUrl + "'>" + res.week.thursday.meals[0].title + "</a></td><td><a href='" + res.week.thursday.meals[1].sourceUrl + "'>" + res.week.thursday.meals[1].title + "</a></td><td><a href='" + res.week.thursday.meals[2].sourceUrl + "'>" + res.week.thursday.meals[2].title + "</a></td>";
        document.getElementById("thursday").innerHTML += "<td>" + res.week.thursday.nutrients.calories + "</td><td>" + res.week.thursday.nutrients.protein + "</td><td>" + res.week.thursday.nutrients.fat + "</td><td>" + res.week.thursday.nutrients.carbohydrates + "</td>";

        document.getElementById("friday").innerHTML += "<td><a href='" + res.week.friday.meals[0].sourceUrl + "'>" + res.week.friday.meals[0].title + "</a></td><td><a href='" + res.week.friday.meals[1].sourceUrl + "'>" + res.week.friday.meals[1].title + "</a></td><td><a href='" + res.week.friday.meals[2].sourceUrl + "'>" + res.week.friday.meals[2].title + "</a></td>";
        document.getElementById("friday").innerHTML += "<td>" + res.week.friday.nutrients.calories + "</td><td>" + res.week.friday.nutrients.protein + "</td><td>" + res.week.friday.nutrients.fat + "</td><td>" + res.week.friday.nutrients.carbohydrates + "</td>";

        document.getElementById("saturday").innerHTML += "<td><a href='" + res.week.saturday.meals[0].sourceUrl + "'>" + res.week.saturday.meals[0].title + "</a></td><td><a href='" + res.week.saturday.meals[1].sourceUrl + "'>" + res.week.saturday.meals[1].title + "</a></td><td><a href='" + res.week.saturday.meals[2].sourceUrl + "'>" + res.week.saturday.meals[2].title + "</a></td>";
        document.getElementById("saturday").innerHTML += "<td>" + res.week.saturday.nutrients.calories + "</td><td>" + res.week.saturday.nutrients.protein + "</td><td>" + res.week.saturday.nutrients.fat + "</td><td>" + res.week.saturday.nutrients.carbohydrates + "</td>";

        document.getElementById("sunday").innerHTML += "<td><a href='" + res.week.sunday.meals[0].sourceUrl + "'>" + res.week.sunday.meals[0].title + "</a></td><td><a href='" + res.week.sunday.meals[1].sourceUrl + "'>" + res.week.sunday.meals[1].title + "</a></td><td><a href='" + res.week.sunday.meals[2].sourceUrl + "'>" + res.week.sunday.meals[2].title + "</a></td>";
        document.getElementById("sunday").innerHTML += "<td>" + res.week.sunday.nutrients.calories + "</td><td>" + res.week.sunday.nutrients.protein + "</td><td>" + res.week.sunday.nutrients.fat + "</td><td>" + res.week.sunday.nutrients.carbohydrates + "</td>";

    });
}



