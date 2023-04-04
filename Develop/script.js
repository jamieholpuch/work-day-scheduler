// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var rootEl = $('#root');
$ (function() { 


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //call the description text area
  var descriptionInput = $('.description').text()
  var saveButtonEl = $('.saveBtn')

  localStorage.setItem('savedItem', JSON.stringify(descriptionInput))

  //function to parse the saved item from storage and set it to the page
  function renderSavedItems() {
    var savedItems = JSON.parse(localStorage.getItem('savedItem'));
    $('.description').innerHTML = savedItems
    if (savedItems !== null) {
      return;
    }
  };
  
  //create an event to listen for click on save button
  //create string from userInput object to put into local storage
 saveButtonEl.on("click", function() {
    renderSavedItems();
});
 
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // find current time vs time of time block
  //if current time = time of time block, add id of present
  //if curent time > time of time block, add id of future
  // if current time < time of time block, add id of past

  let timeBlocks = $(".time-block");
  var currentTime = dayjs().format('H');
  timeBlocks.each(function (div) {
    let timeBlockValue = $(this).attr('id')
    if (currentTime > timeBlockValue) {
      $(this).addClass("past");
    } else if (currentTime < timeBlockValue) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });


    var currentDay = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(currentDay);
});