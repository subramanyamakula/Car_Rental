window.addEventListener('scroll',()=>{
    document.querySelector('nt-container').classList.toggle('scrolling',scrollY>40)
})

const menuBtn = document.querySelector('fa-bars');
const NavList = document.querySelector('navlist');

menuBtn.oneclick = function(){
    menuBtn.classList.toggle('fa-xmark');
    NavList.classList.toggle('active')
}
const sr =ScrollReveal({
    distance : '60px',
    duraction : 2500,
    delay:400,
    reset: true

})
sr.reveal('.nav-top',{delay:222,origin:'top'})
sr.reveal('.home .info',{delay:444,origin:'bottom'})
sr.reveal(' .info .booking-form',{delay:999,origin:'right'})
sr.reveal('.works',{delay:600 , origin:'top'})
sr.reveal('.about-container .image',{delay:999,origin:'left'})
sr.reveal('.about-container .content',{delay:322,origin:'right'})
sr.reveal('.services .title',{delay:999,origin:'top'})
sr.reveal('.services-container ',{delay:322,origin:'bottom'})
sr.reveal('.blog-container ',{delay:322,origin:'left'})
sr.reveal('.poster ',{delay:322,origin:'bottom'})
sr.reveal('.contact-aside ',{delay:322,origin:'bottom'})
sr.reveal('.contact-form ',{delay:600,origin:'right'})
sr.reveal('.footer ',{delay:600,origin:'top'})


document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    const formData = new FormData(this);
    const data = {
        pickUp: formData.get('pickUp'),
        dropOff: formData.get('dropOff')
    };

    // Send a request (you can replace the URL with your actual endpoint)
    fetch('https://your-server-endpoint.com/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        // Display a confirmation message
        alert('Booking confirmed!'); // Customize this message as needed
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error with your booking.');
    });
});








