// Obfuscation deters basic scrapers; it does not prevent determined bots.
// Decode only after a visitor explicitly requests the address.
const revealButton = document.getElementById('reveal-email');
revealButton.hidden = false;
revealButton.addEventListener('click', () => {
  const encoded = [32, 54, 42, 62, 50, 125, 55, 54, 33, 54, 19, 49, 58, 63, 56, 54, 61, 39, 125, 54, 55, 38, 125, 39, 33];
  const address = encoded.map(value => String.fromCharCode(value ^ 83)).join('');
  const [name, domain] = address.split('@');
  const emailText = document.createElement('span');
  emailText.textContent = name + ' [at] ' + domain.replaceAll('.', ' [dot] ');
  emailText.tabIndex = -1;
  revealButton.replaceWith(emailText);
  emailText.focus();
}, { once: true });
