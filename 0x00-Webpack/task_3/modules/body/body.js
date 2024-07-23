import $ from 'jquery';
import _ from 'lodash';

$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");

let counter = 0;
function updateCounter() {
    counter += 1;
    $("#count").html(`${counter} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 300));