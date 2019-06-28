function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function() {

  
  window.onclick = function(e){  
     
  var id =  e.target.id;   
   if (id === 'sent')  {
    
    var d = new Date();
    
    var date = {year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'};

    var e = d.toLocaleDateString('en-US', date); 
     
    var nama = document.getElementById('name').value  

    var email = document.getElementById('email').value  

    var komentar = document.getElementById('komen').value  

    $( "#para" ).append( '<div class="row"><div class="content"><div class="cardd"><div class="comment-border"><div class="comment-author"><p>' + nama + '</p></div><div class="comment-email"><p>' + email + ' - ' + e + '</p></div><div class="comment"><p>'+ komentar +'</p');

    $("#name").val('');
    $("#email").val('');
    $("#komen").val('');
   }
  }

});