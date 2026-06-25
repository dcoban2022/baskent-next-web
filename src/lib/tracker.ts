const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) {
      utms[key] = val;
      try { sessionStorage.setItem(key, val); } catch {}
    } else {
      try {
        const stored = sessionStorage.getItem(key);
        if (stored) utms[key] = stored;
      } catch {}
    }
  }
  return utms;
}

export async function track(event_type: string, extra?: Record<string, unknown>) {
  try {
    const utms = getUtmParams();
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_type,
        page: window.location.pathname,
        referrer: document.referrer || null,
        ...utms,
        extra: extra || {},
      }),
    });
  } catch {
    // tracking must never break the site
  }
}
