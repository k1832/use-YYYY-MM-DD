// --- Element Selectors ---
const agreeBtn = document.getElementById('agreeBtn');
const agreeMessage = document.getElementById('agreeMessage');
const isoLink = document.getElementById('isoLink');
const twitterLink = document.getElementById('twitterLink');
const copyBtn = document.getElementById('copyBtn');

// --- Event Listeners ---

// Track and animate "I'm Convinced" button clicks
agreeBtn.addEventListener('click', () => {
    gtag('event', 'convince_click', {
      'event_category': 'engagement',
      'event_label': 'Convinced Button'
    });
    agreeBtn.classList.add('animate-pulse');
    agreeMessage.textContent = 'Awesome! You are now a formatting champion.';
    agreeMessage.classList.remove('opacity-0');
    setTimeout(() => {
        agreeBtn.classList.remove('animate-pulse');
    }, 1500);
});

// Track clicks on the "Learn more" ISO link
isoLink.addEventListener('click', () => {
    gtag('event', 'select_content', {
      'content_type': 'link',
      'item_id': 'iso_learn_more'
    });
});

// Track clicks on the author's Twitter link
twitterLink.addEventListener('click', () => {
    gtag('event', 'select_content', {
        'content_type': 'social_link',
        'item_id': 'twitter_author_link'
    });
});

// Handle "Copy Link" button functionality
copyBtn.addEventListener('click', () => {
    // Fire the analytics event
    gtag('event', 'copy_link_click', {
        'event_category': 'engagement',
        'event_label': 'Copy Link Button'
    });
    // Copy URL to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
        // Provide user feedback
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '✅ Copied!';
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy link: ', err);
    });
});
