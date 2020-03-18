$(document).ready(function () {

  var th = $(this);
  $.ajax({
    type: "POST",
    url: "/email/mail_simple.php", //Change
    data: th.serialize()
  }).done(function () {
    console.log('Thank you!');

    setTimeout(function () {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });

});
