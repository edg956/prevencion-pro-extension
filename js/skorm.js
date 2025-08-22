// === Find SCORM API recursively ===
function findAPI(win) {
  if (win.API_1484_11) return win.API_1484_11;
  if (win.API) return win.API;
  for (let i = 0; i < win.frames.length; i++) {
    const api = findAPI(win.frames[i]);
    if (api) return api;
  }
  return null;
}

function init() {
  let API = null;
  try {
    API = findAPI(window);
    console.debug("✅ SCORM API detected:", API);
  } catch (e) {
    console.warn("⚠️ No SCORM API detected:", e);
  }

  if (API) {
    const btn = document.createElement("button");
    btn.innerText = "Saltar lección";
    btn.id = "prevencion-pro-btn";
    btn.style.position = "fixed";
    btn.style.zIndex = 999999;
    btn.style.background = "#4CAF50";
    btn.style.color = "#fff";
    btn.style.fontSize = "14px";
    btn.style.padding = "10px 15px";
    btn.style.border = "none";
    btn.style.borderRadius = "6px";
    btn.style.cursor = "pointer";
    btn.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
    btn.style.transition = "background 0.2s ease-in-out";
    btn.style.display = "none";

    btn.addEventListener("mouseover", () => (btn.style.background = "#45a049"));
    btn.addEventListener("mouseout", () => (btn.style.background = "#4CAF50"));

    // === Handle button click ===
    btn.addEventListener("click", () => {
      const is2004 = !!API.Initialize;
      const initFn = is2004 ? API.Initialize : API.LMSInitialize;
      const setVal = is2004 ? API.SetValue : API.LMSSetValue;
      const commit = is2004 ? API.Commit : API.LMSCommit;

      if (initFn) initFn.call(API, "");

      if (is2004) {
        setVal.call(API, "cmi.completion_status", "completed");
        setVal.call(API, "cmi.success_status", "passed");
        setVal.call(API, "cmi.progress_measure", "1");
        setVal.call(API, "cmi.score.raw", "100");
      } else {
        setVal.call(API, "cmi.core.lesson_status", "completed");
        setVal.call(API, "cmi.core.score.raw", "100");
      }

      if (commit) commit.call(API, "");
      alert("✅ SCORM course marked as completed with 100% score!");
    });

    window.addEventListener("prevencion-pro-config-update", (e) => {
      console.log("Config update received:", e.detail);
      const position = e.detail.buttonPosition || "top-right";
      btn.style.top = position.includes("top") ? "20px" : "unset";
      btn.style.bottom = position.includes("bottom") ? "20px" : "unset";
      btn.style.left = position.includes("left") ? "20px" : "unset";
      btn.style.right = position.includes("right") ? "20px" : "unset";
      btn.style.display = "block";
    }, false);

    document.body.appendChild(btn);
  }
}

init();
