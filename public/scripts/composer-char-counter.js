$(document).ready(function() {
  console.log('It\'s working!');
  //grabs id: tweet-text (index.html) and console.logs the input
  $("#tweet-text").on('input', function() {
    console.log('this: ', this)
    const value = $(this).val().length;
    console.log('value: ', value);
    let count = $('#counter').text(140 - value);
    let countLength = count.text()
    // console.log('count: ', countLength);
    if (countLength < 0) {
      $('#counter').addClass("red");
    } else {
      $('#counter').removeClass("red");
    }
  })
});






