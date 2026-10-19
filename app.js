const CONFIG = {
  stripeCheckoutUrl: "INSERIRE LINK STRIPE",
};

function trackEvent(name, detail = {}) {
  window.dispatchEvent(new CustomEvent("csp:event", { detail: { name, ...detail } }));
  console.info("[Computer Senza Paura event]", name, detail);
}

document.querySelectorAll("[data-event]").forEach((element) => {
  const eventName = element.dataset.event;

  if (element.tagName.toLowerCase() === "video") {
    element.addEventListener("play", () => trackEvent(eventName));
    return;
  }

  element.addEventListener("click", (event) => {
    trackEvent(eventName, { text: element.textContent.trim() });

    if (element.classList.contains("checkout-link") && CONFIG.stripeCheckoutUrl.includes("INSERIRE LINK STRIPE")) {
      event.preventDefault();
      alert("Link Stripe non ancora configurato.");
    }
  });
});
