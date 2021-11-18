/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  console.log('It is working - client.js');

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const $renderTweets = function(tweetsArray) {
    for (const tweets of tweetsArray) {
      const $tweet = $createTweetElement(tweets);
        console.log('tweet: ', $tweet);
        $('.tweets-container').append($tweet);
      }
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


  $renderTweets(data);



});

