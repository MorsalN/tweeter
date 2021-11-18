$(document).ready(function() {
      $("#tweetSubmit").submit(function (event) {
        event.preventDefault();
        console.log('Button clicked');

        const counter = $('#tweet-text').val().length;
        console.log('value: ', counter);
        if (counter > 140) {
          console.log('counter is greater than 140');
          alert('No essay\'s please :o')
        } else if (counter === 0) {
          alert('Tweet cannot be empty...')
        } else {
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
