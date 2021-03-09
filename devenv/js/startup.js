console.log("startup");
var templates = [];

$("#stencils").load("res/html/templates.html", function () {
    $("#stencils").children().each(function () {
        console.log("new");
        console.log(this);
        let name = $(this).attr('id');
        let html = Handlebars.compile($(this)[0].outerHTML);
        templates.push({
            name: name,
            html: html
        });
    });
});

function temp(inname, data) {
     var ctemp = templates.filter(obj => {
        return obj.name === inname
    });
    return ctemp[0].html(data);
}