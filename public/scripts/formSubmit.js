$(document).ready(function() {
      $("#tweetSubmit").submit(function (event) {
        event.preventDefault();
        console.log('Button clicked');
        const alertElement = $('#error');
        const counter = $('#tweet-text').val().length;
        console.log('value: ', counter);
        if (counter > 140) {
          // alertElement.show();
          alertElement.slideDown();
          alertElement.text('Your tweet is greater than 140 characters :(');
          // console.log('counter is greater than 140');
          // alert('No essay\'s please :o')
        } else if (counter === 0) {
          // alertElement.show();
          alertElement.slideDown();
          alertElement.text('Tweet cannot be empty...');
          // alert('Tweet cannot be empty...')
        } else {
          alertElement.hide();
          const serialize = $( this ).serialize();
          console.log('serialize: ', serialize);
          // $("#tweetSubmit").text(serialize);
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
