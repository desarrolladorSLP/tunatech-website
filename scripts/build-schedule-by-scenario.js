var fs = require('fs');
var schedule1stDay = require('./schedule-1stDay.json');
var schedule2ndDay = require('./schedule-2ndDay.json');
var outputHtml = "";

var createHtmlSchedule = function (object, title, id) {
    var html

    html = '<div class="panel-heading date-header" role="tab" id="date-' + id + '-heading">' +
           '<h4 class="panel-title">' +
           '<a data-toggle="collapse" data-parent="#accordion" href="#date-' + id
           + '" aria-expanded="true" aria-controls="collapseOne">' +
           title +
           '</a></h4></div>\n';

    html += '<div id="date-' + id + '" class="panel-collapse collapse in" role="tabpanel"' +
            ' aria-labelledby="date-19-heading">' +
            '<ul class="list-group ">\n';

    object.forEach(function (item) {

        html += '<li class="list-group-item event-item">' +
                '<span style="display:inline-block; width: 50% !important;" >' +
                item.startTime + '&nbsp;' + item.title + '</span>' +
                '<span class="stage-button"><span>' + item.location + '</span></span>' +
                '<span class="streaming-link" style="float:right" >' +
                '<a class="btn" target="_blank" href="#">' + item.subTitle + '</a></span></li>\n';

    });

    html += '</ul></div>\n';

    return html;
};

outputHtml += createHtmlSchedule(schedule1stDay, 'Sábado 19 de Agosto', 19);
outputHtml += createHtmlSchedule(schedule2ndDay, 'Domingo 20 de Agosto', 20);

fs.writeFile("schedule.html", outputHtml, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
