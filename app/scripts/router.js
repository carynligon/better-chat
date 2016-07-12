import $ from 'jquery';
import $chatWindow from './views/chat-window';
import renderChats from './views/chat-window';
import $newMessage from './views/new-message';
import $login from './views/login';

let interval = '';

function router() {
  var hash = location.hash;
  if (hash === '#login') {
    window.clearInterval(interval);
    $('.container').empty();
    $('.container').append($login);
  } else if (hash === '#chat') {
    interval = window.setInterval(renderChats, 7000);
    $('.container').empty();
    $('.container').append($chatWindow);
  }
}

export default router;