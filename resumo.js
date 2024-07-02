window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressbar").style.width = scrolled + "%";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var target = document.querySelector(this.getAttribute('href'));
        var offsetPosition = target.offsetTop - 50; // Altere 100 para o número de pixels que você deseja parar antes do elemento

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

