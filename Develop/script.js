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


  //var userInput = document.getElementsByClassName("description");
  //console.log(userInput.val);


  //create string from userInput object to put into local storage
  function addUserInputToStorage() {
    var userInput = $('.description').val()
    var timeEl = $(this).parent().attr('id');
    console.log(timeEl)
    console.log(userInput);
    localStorage.setItem(timeEl, userInput)
  }
  //get the saved item from storage and set it to the page
  var savedItem09 = localStorage.getItem("09");
  var savedItem10 = localStorage.getItem("10");
  var savedItem11 = localStorage.getItem("11");
  var savedItem12 = localStorage.getItem("12");
  var savedItem13 = localStorage.getItem("13");
  var savedItem14 = localStorage.getItem("14");
  var savedItem15 = localStorage.getItem("15");
  var savedItem16 = localStorage.getItem("16");
  var savedItem17 = localStorage.getItem("17");
  

  $('#09').children(".description").text(savedItem09)
  $('#10').children(".description").text(savedItem10)
  $('#11').children(".description").text(savedItem11)
  $('#12').children(".description").text(savedItem12)
  $('#13').children(".description").text(savedItem13)
  $('#14').children(".description").text(savedItem14)
  $('#15').children(".description").text(savedItem15)
  $('#16').children(".description").text(savedItem16)
  $('#17').children(".description").text(savedItem17)
  


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

    // set the current date
    var currentDay = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(currentDay);

     //create an event to listen for click on save button
  $('.saveBtn').on("click", addUserInputToStorage);
});