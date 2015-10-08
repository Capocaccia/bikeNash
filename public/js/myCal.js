$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
         events: [
        {
            title  : 'event2',
            start  : '2015-10-05',
            end    : '2015-10-08',
            url: 'http://google.com/'

        },
        {
            title  : 'event2.1',
            start  : '2015-10-05',
            end    : '2015-10-08',
            url: 'http://google.com/'
        },
        {
            title  : 'event3',
            start  : '2015-10-09T12:30:00',
            allDay : false // will make the time show
        }
    ],
    eventBorderColor: '#FFF',
    eventBackgroundColor: '#0198E1',

    eventClick: function(event) {
        if (event.url) {
            window.open(event.url);
            return false;
        }
    },

    dayClick: function(date, jsEvent, view) {
        // change the day's background color just for fun
        $(this).css('background-color', 'red');

    },

    })

});
