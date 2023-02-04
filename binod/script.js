$(document).ready(function () {
  // Get the messages div
  let messages = $('.card-body');

  // Scroll to the bottom of the messages div when a new message is added
  function scrollToBottom() {
    messages.scrollTop(messages[0].scrollHeight);
  }

  // Add a message when the send button is clicked
  $('.send-button').click(function () {
    let inputText = $('.input-text').val();
    if(inputText == '') return;
    $('.input-text').val('');
    $('.card-body').append(`
      <div class="message user-message">
        ${inputText}
      </div>
    `);
    // Return 'Binod' a random number of times
    let binodCount = Math.floor(Math.random() * 10) + 1;
    let totalBinods = 'Binod!';
    for (let i = 0; i < binodCount; i++) {
      totalBinods += ' Binod';
    }

    $('.card-body').append(`
        <div class="message">
          ${totalBinods}
        </div>
      `);
    scrollToBottom();
  });

  // Add a message when the enter key is pressed
  $('.input-text').keypress(function (e) {
    if (e.which == 13) {
      $('.send-button').click();
    }
  });
});
