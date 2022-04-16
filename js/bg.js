// $(window).scroll(function() {
  
//   // selectors
//   var $window = $(window),
//       $body = $('body'),
//       $panel = $('.panel');
  
//   // Change 33% earlier than scroll position so colour is there when you arrive.
//   var scroll = $window.scrollTop() + ($window.height() / 3);
 
//   $panel.each(function () {
//     var $this = $(this);
    
//     // if position is within range of this panel.
//     // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//     // Remember we set the scroll to 33% earlier in scroll var.
//     if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
//       // Remove all classes on body with color-
//       $body.removeClass(function (index, css) {
//         return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
//       });
       
//       // Add class of currently active div
//       $body.addClass('color-' + $(this).data('color'));
//     }
//   });    
  
// }).scroll();

function openNav() {
  const nav = document.getElementById("mynav");
  nav.classList.toggle('show');
};

function contact() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var issue = document.getElementById("issue").value;
  var more = document.getElementById("more").value;
  if (!name || !email || !issue) {
    alert("please enter all fields");
  } else {
    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdF5-suD5z68zJi7ZVt8Xd7TOj4Wvi2J6MQdPtcXQ_ph1_DVg/formResponse?usp=pp_url&entry.1505275140="+name+"&entry.866932767="+email+"&entry.913882942="+issue+"&entry.2103770928="+more
    );
    alert("Success, please wait for a response");
  }
}

function check() {
  alert('good');
}