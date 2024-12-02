const helo_btn = document.getElementById('helo_btn');

helo_btn.addEventListener('click', () => {
    if (helo_btn.style.backgroundColor === 'blue') {
        helo_btn.style.backgroundColor = ''; // Reset to default
        helo_btn.style.color = ''; // Reset to default
    } else {
        helo_btn.style.backgroundColor = 'blue';
        helo_btn.style.color = 'white';
    }
   
});

