# 🦺 PrevencionPro – Your Fast Track Through Cursos de Prevención Laboral

**PrevencionPro** is a lightweight browser extension that helps you **skip the hassle** of mandatory *cursos de prevención laboral* by giving you **shortcuts** directly inside the platform.
No more wasting hours clicking *“Siguiente”* endlessly — PrevencionPro detects SCORM-based courses and gives you a **smart control button** to skip videos.

---

## ✨ Features

* 🚀 **Auto-detects SCORM courses** (works with most Spanish prevention platforms).
* 🖱️ **One-click helper button** injected directly into the page.
* ⚡ **Communicates with the SCORM API** in real-time to track, control, and finish courses faster.
* 🌐 **Supports Chrome, Edge, Brave, and Firefox**.
* 🔒 **Privacy-friendly** — nothing leaves your browser.

---

## 📸 How It Works

1. **Install the extension** (see instructions below).
2. Open your company’s prevention training platform.
3. If the course uses SCORM, you’ll see a **PrevencionPro button** in the top-right corner.
4. Click **Saltar lección** to skip the current lesson and mark it as completed.
5. Enjoy finishing your course **faster** 🎉

---

## 🛠 Installation

### For Chrome, Edge, or Brave

1. Download or clone this repository.
2. Open `chrome://extensions/` in your browser.
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked** and select the project folder.
5. The extension icon will appear in your toolbar.

### For Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on**.
3. Select the `manifest.json` file.
4. The extension will be active until you restart Firefox.

---

## ⚙️ Configuration

PrevencionPro uses `chrome.storage.sync` to store and retrieve your configuration preferences.
These are synced across browsers where you’re logged in:

| Setting            | Description                     | Default   |
| ------------------ | ------------------------------- | --------- |
| **ButtonPosition** | Where the helper button appears | Top-right | |

---

## 🔧 Debugging & Development

### Debug the content script

1. Open the training platform page.
2. Press `F12` → **Console** → select the **Content scripts** context from the dropdown.
3. Check logs related to API detection.

## 📦 Tech Stack

* **Manifest v3** compatible
* **Content scripts** → Detect SCORM & inject helper
* **Popup** → Manage settings & preferences

---

## 🚀 Roadmap

* [ ] Add **auto-advance** through lessons
* [ ] Add **dark mode**
* [ ] Support for more prevention platforms
* [ ] One-click “Mark as Completed” feature
* [ ] AI-powered test completion

---

## ⚠️ Disclaimer

> PrevencionPro is intended for **educational purposes only**.
> Always follow your company’s training guidelines and comply with applicable regulations.

---

## ✅ Tested on
- https://https://smartlearning.global/ (used by https://prevencontrol.com/)

## Sponsoring

Looking for extra features? Consider sponsoring the project!

<a href="https://www.buymeacoffee.com/edg956" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
