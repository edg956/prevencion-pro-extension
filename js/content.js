const browserAPI = typeof browser !== "undefined" ? browser : chrome;

function sharedEventData(obj) {
  if (typeof cloneInto === 'function') {
    return cloneInto(obj, window);
  }
  return obj
}

function injectScript(file, node) {
    const th = document.getElementsByTagName(node)[0];
    const s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);

    s.addEventListener('load', function() {
      browserAPI.storage.sync.get({ buttonPosition: 'top-right' }).then(function(items) {
        window.dispatchEvent(new CustomEvent('prevencion-pro-config-update', sharedEventData({ detail: items })));
      });
    }, true);

    th.appendChild(s);
}

injectScript( browserAPI.runtime.getURL('js/skorm.js'), 'body');

browserAPI.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type !== 'config-update') return;

    // Forward to injected script
    window.dispatchEvent(new CustomEvent('prevencion-pro-config-update', sharedEventData({ detail: msg.config })));
});
