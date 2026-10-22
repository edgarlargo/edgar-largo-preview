// A public preview keeps the real controls but has no mail or CMS backend.
window.addEventListener('submit', event => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  event.preventDefault(); event.stopImmediatePropagation();
  let status = form.querySelector('[data-ea-form-status], [data-largo-preview-status]');
  if (!status) {
    status = document.createElement('p');
    status.setAttribute('data-largo-preview-status', '');
    status.setAttribute('role', 'status');
    form.appendChild(status);
  }
  status.hidden = false;
  status.textContent = 'This is a website preview. Messages are not sent.';
}, true);
