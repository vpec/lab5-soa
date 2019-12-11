$(document).ready(function () {
    registerSearch();
    registerTemplate();
});

function registerSearch() {
    $("#search").submit(function (event) {
        event.preventDefault();
        $.get($(this).attr('action'), {q: $("#q").val(), max: $("#m").val()}, function (data) {
            $("#resultsBlock").html(Mustache.render(template, data));
        });
    });
}

function registerTemplate() {
    template = $("#template").html();
    Mustache.parse(template);
}
