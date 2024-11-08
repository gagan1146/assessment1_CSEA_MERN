const generateBtn = document.getElementById('generateBtn');
const main3 = document.querySelector('.main3');
const main2 = document.querySelector('.main2');

generateBtn.addEventListener('click', function(event) {
    event.preventDefault();
    main3.style.display = 'block'; 
    main2.style.display='none';
    
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const phoneInput = document.querySelector('input[name="Number"]');
    const linkedinInput = document.querySelector('input[name="Linkedin"]');
    const githubInput = document.querySelector('input[name="Github"]');
    const experienceInput = document.querySelector('input[name="Experience"]');
    const educationInput = document.querySelector('input[name="Education"]');
    const photoInput = document.querySelector('input[name="photo"]');
    
    document.getElementById('h1Name1').textContent = nameInput.value;
    document.querySelector('.email').textContent = emailInput.value;
    document.querySelector('.phone').textContent = phoneInput.value;
    document.querySelector('.linkedin').textContent = linkedinInput.value;
    document.querySelector('.git').textContent = githubInput.value;
    document.querySelector('.experience').textContent = experienceInput.value;
    document.querySelector('.edu').textContent = educationInput.value;
    
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profilePic').src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    }
});

function downloadResume() {
    const resumeElement = document.getElementById('resume');
    
    const options = {           
        filename: 'Resume.pdf',   
    };
    
    html2pdf().from(resumeElement).set(options).save();
}
