$(document).ready(function() {
      $("#tweetSubmit").submit(function (event) {
        event.preventDefault();

        // Error Variables
        const alertElement = $('#error');
        const counter = $('#tweet-text').val().length;

        // Too Long Tweet
        if (counter > 140) {

          alertElement.slideDown();
          alertElement.text('Your tweet is greater than 140 characters :(');

        // Empty Tweet 
        } else if (counter === 0) {

          alertElement.slideDown();
          alertElement.text('Tweet cannot be empty...');

        // Good Tweet
        } else {
          alertElement.hide();
          const serialize = $( this ).serialize();
          console.log('serialize: ', serialize);

          $.ajax({
            url: "/tweets/",
            type: 'POST',
            data: serialize,
            success: () => {
              $loadTweets();
            }
          }, console.log('xhr request'))
        }
      });
});
