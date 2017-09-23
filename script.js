var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$("#search").click(searchCountries);

function searchCountries() {
    var countryName = $("#country-name").val();
    if(!countryName.length) {countryName = "Poland";
    }
    $.ajax({
        url: url + countryName,
        method: "GET",
        success: showCountriesList,
        error: showError
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $("<li>").text("Country name: " + item.name).appendTo(countriesList);
        $("<li>").text("Capital City: " + item.capital).appendTo(countriesList);
        $("<li>").text("Belongs to the following region: " + item.region).appendTo(countriesList);
    });
}

function showError(xhr, status, errorThrown) {
    countriesList.empty();
    if(xhr.status == 404) {
        $("<p>").text("Ooops! Something went wrong. Please, enter a valid country name!").appendTo(countriesList);
    }
}