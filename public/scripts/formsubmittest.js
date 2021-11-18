$(document).ready(function() {
      $("#tweetSubmit").submit(function (event) {
        event.preventDefault();
        console.log('Button clicked');
        const serialize = $( this ).serialize();
        console.log('serialize: ', serialize);
        // $("#tweetSubmit").text(serialize);
        $.ajax({
          url: "/tweets",
          type: 'POST',
          data: serialize,
        }, console.log('xhr request'))
      });
});
