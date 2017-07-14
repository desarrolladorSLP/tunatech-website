var fs = require('fs');
var schedule1stDay = require('./schedule-1stDay.json');
var schedule2ndDay = require('./schedule-2ndDay.json');
var outputHtml = "";

var createHtmlSchedule = function (object, title) {
    var html;
    var cols = 0;

    html = '<div class="row"><div class="col-md-12"><h4 class="section-title">' +
           title +
           '</h4></div></div>';

    object.forEach(function (item) {
        if (cols % 3 == 0) {
            html += '\n<div class="row">';
        }

        html += '<div class="col-md-4 col-sm-6">' +
                '<div class="schedule-box">' +
                '<div class="time">' +
                '<time datetime="' + item.startTime + '">' + item.startTime +
                '</time> - <time datetime="' + item.endTime + '">' + item.endTime + '</time>' +
                '</div>' +
                '<h4>' + item.title + '</h4>' +
                '<h5>' + item.subTitle + '</h5>' +
                '<p>' + item.location + '</p>' +
                '</div>' +
                '</div>\n';

        if (cols % 3 == 2) {
            html += '</div>';
        }

        cols++;
    });

    if (cols % 3 != 0) {
        html += '</div>';
    }

    return html;
};

outputHtml += createHtmlSchedule(schedule1stDay, 'Sábado 19 de Agosto');
outputHtml += createHtmlSchedule(schedule2ndDay, 'Domingo 20 de Agosto');

fs.writeFile("schedule.html", outputHtml, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
