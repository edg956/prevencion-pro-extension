const browserAPI =  chrome || browser;
const positionSelect = document.getElementById("prevencionProPosition");
const saveBtn = document.getElementById("prevencionProSave");
const status = document.getElementById("prevencionProStatus");

// Load saved settings
browserAPI.storage.sync.get({ buttonPosition: "top-right" }).then(({ buttonPosition }) => {
  positionSelect.value = buttonPosition;
});

// Save settings
saveBtn.addEventListener("click", () => {
  const config = { buttonPosition: positionSelect.value};

  browserAPI.storage.sync.set(config).then(() => {
    status.textContent = "✅ Saved!";

    browserAPI.tabs.query({ active: true, currentWindow: true }, tabs => {
      browserAPI.tabs.sendMessage(tabs[0].id, { type: "config-update", config });
    });

    setTimeout(() => (status.textContent = ""), 1500);
  });
});
