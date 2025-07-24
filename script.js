// --- Element Selectors ---
const agreeBtn = document.getElementById('agreeBtn');
const agreeMessage = document.getElementById('agreeMessage');
const isoLink = document.getElementById('isoLink');
const twitterLink = document.getElementById('twitterLink');

// --- Event Listeners ---

// Track "I'm Convinced" button clicks
agreeBtn.addEventListener('click', () => {
    // Fire Google Analytics event
    gtag('event', 'convince_click', {
      'event_category': 'engagement',
      'event_label': 'Convinced Button'
    });

    // Animate button and show message
    agreeBtn.classList.add('animate-pulse');
    agreeMessage.textContent = 'Awesome! You are now a formatting champion.';
    agreeMessage.classList.remove('opacity-0');

    setTimeout(() => {
        agreeBtn.classList.remove('animate-pulse');
    }, 1500);
});

// Track clicks on the "Learn more" ISO link
isoLink.addEventListener('click', () => {
    // Fire Google Analytics event
    gtag('event', 'select_content', {
      'content_type': 'link',
      'item_id': 'iso_learn_more'
    });
});

// Track clicks on the author's Twitter link
twitterLink.addEventListener('click', () => {
    // Fire Google Analytics event
    gtag('event', 'select_content', {
        'content_type': 'social_link',
        'item_id': 'twitter_author_link'
    });
});
