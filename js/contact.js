/**
 * FoodDice contact.js — Formspree form submission
 */

(function initContactForm() {
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkovezpl';

  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const error   = document.getElementById('form-error');
  const submitBtn = form ? form.querySelector('[type="submit"]') : null;

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Basic validation
    const name    = form.querySelector('#name').value.trim();
    const email   = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      showError(true);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(true);
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify({
          name,
          email,
          type:    form.querySelector('#type').value,
          message
        })
      });

      if (res.ok) {
        form.classList.add('hidden');
        success.hidden = false;
        success.classList.add('show');
      } else {
        throw new Error('Server error');
      }
    } catch {
      showError(true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
    }
  });

  function showError(show) {
    if (!error) return;
    error.hidden = !show;
    if (show) setTimeout(() => { error.hidden = true; }, 5000);
  }
})();
