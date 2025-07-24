const agreeBtn = document.getElementById('agreeBtn');
const agreeMessage = document.getElementById('agreeMessage');

agreeBtn.addEventListener('click', () => {
    agreeBtn.classList.add('animate-pulse');
    agreeMessage.textContent = 'Awesome! You are now a formatting champion.';
    agreeMessage.classList.remove('opacity-0');

    setTimeout(() => {
        agreeBtn.classList.remove('animate-pulse');
    }, 1500);
});
