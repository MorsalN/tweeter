/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  console.log('It is working - client.js');

  const tweetData =   {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1636930196982
  }
  
  const $createTweetElement = function(obj) {
    const $tweet = $(`
    <article class="tweet">
      <header class="top-section-article">
        <div class="header-left">
          <img src="${obj.user.avatars}"></img>
          <span>${obj.user.name}</span>
        </div>
        <span>${obj.user.handle}</span>
      </header>

      <div class="middle-section-article">
        <p>${obj.content.text}</p>
      </div>

      <footer>
        <label>${timeago.format(obj.created_at)}</label>
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>

    </article>
    `);
    return $tweet;
  };
  
  const $tweet = $createTweetElement(tweetData);

  console.log('tweet: ', $tweet);
  $('.tweet').append($tweet);

});

