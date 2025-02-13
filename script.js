document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');
    let noBtnClickCount = 0;

    yesBtn.addEventListener('click', function() {
        response.textContent = "I love you so so much!! YEZZZY YEZZ YEZZZ";
        response.classList.add('heart-beat');
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
    });

    noBtn.addEventListener('click', function() {
        noBtnClickCount++;
        
        // Make the "No" button harder to click each time
        const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';

        // Make "Yes" button bigger each time "No" is clicked
        yesBtn.style.transform = `scale(${1 + (noBtnClickCount * 0.1)})`;
    });
}); 
