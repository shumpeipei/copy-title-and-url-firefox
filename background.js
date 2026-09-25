const badgeTimers = new Map();

function showBadge(tabId, text, color) {
  if (badgeTimers.has(tabId)) {
    clearTimeout(badgeTimers.get(tabId));
    badgeTimers.delete(tabId);
  }

  browser.action.setBadgeText({ text, tabId }).catch(() => {});
  browser.action.setBadgeBackgroundColor({ color, tabId }).catch(() => {});

  const timerId = setTimeout(() => {
    browser.action.setBadgeText({ text: "", tabId }).catch(() => {});
    badgeTimers.delete(tabId);
  }, 1500);

  badgeTimers.set(tabId, timerId);
}

browser.action.onClicked.addListener(async (tab) => {
  if (!tab || typeof tab.id !== "number") {
    return;
  }

  const title = tab.title;
  const url = tab.url;

  if (!title || !url || typeof title !== "string" || typeof url !== "string") {
    showBadge(tab.id, "ERR", "#dc3545");
    return;
  }

  try {
    const text = `${title}\n${url}`;
    await navigator.clipboard.writeText(text);
    showBadge(tab.id, "OK", "#28a745");
  } catch (_err) {
    showBadge(tab.id, "ERR", "#dc3545");
  }
});
