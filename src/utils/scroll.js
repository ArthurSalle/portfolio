export default function scrollTo() {
  const links = document.querySelectorAll('.btn');
  links.forEach((each) => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
  const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  var targetID = new URL(e.target.href);
  const targetAnchor = document.querySelector(targetID.hash);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
  const checkIfDone = setInterval(function () {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}
