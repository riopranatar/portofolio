function myDM() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

window.onscroll = function() {myHeader()};
    
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    
    function myHeader() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }