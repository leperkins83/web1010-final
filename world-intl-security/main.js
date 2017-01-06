var logoBtn = $("#logo-btn");

logoBtn.click(function(event) {
  console.log('clicked on logo');
});

var missionBtn = $("#mission-btn");
var mission = $("#mission-content");

missionBtn.click(function(e) {
  e.preventDefault();
  mission.toggle();
});

var servicesBtn = $("#services-btn");
var services = $("#services-content");

servicesBtn.click(function(e) {
  e.preventDefault();
  services.toggle();
});


var form = $("#contact-form");
var formBtn = $("#form-btn");

form.submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: "http://fvi-grad.com:4004/fakeform",
    method: "POST",
    data: form.serialize()
  })
  .done(function(data) {
    formBtn.html("Message Sent!");
  })
  .fail(function(data) {
    formBtn.html("Error sending message");
  });
})
