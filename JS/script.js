function changeHeaderOpacity() {
    const header = document.querySelector('.navbar');
    if (window.scrollY === 0) {
        header.style.backgroundColor = 'rgb(171, 194, 121)'; 
    } else {
        header.style.backgroundColor = 'rgb(171, 194, 121, 0.8)';
    }
}


document.addEventListener("DOMContentLoaded", function() {
    
    var alex = document.getElementById('alex');
    alex.addEventListener('click', function() {
    document.body.classList.toggle('pashalka');
    });


    // Вгору
    document.getElementById('scrollUpBlock').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
        
        // Вниз
    document.getElementById('scrollDownBlock').addEventListener('click', function() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });

        //Відображення
    window.addEventListener('scroll', function() {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        var scrollUpBlock = document.getElementById('scrollUpBlock');
        var scrollDownBlock = document.getElementById('scrollDownBlock');   
        var windowHeight = window.innerHeight;
        var documentHeight = document.documentElement.scrollHeight;
          
        if (scrollPosition > windowHeight / 2) {
            scrollUpBlock.style.display = 'block';
        } else {
            scrollUpBlock.style.display = 'none';
        }

        if  (scrollPosition + windowHeight + 7 * parseFloat(getComputedStyle(document.documentElement).fontSize) >= documentHeight) {
            scrollDownBlock.style.display = 'none';
          } else {
            scrollDownBlock.style.display = 'block';
          }
        });
});