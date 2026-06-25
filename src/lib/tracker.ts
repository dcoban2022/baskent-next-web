const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

function getSessionId(): string {
  try {
    let sid = sessionStorage.getItem("_sid");
    if (!sid) {
      sid = crypto.randomUUID();
      sessionStorage.setItem("_sid", sid);
    }
    return sid;
  } catch {
    return "unknown";
  }
}

function getVisitorSignals(): Record<string, string | boolean> {
  try {
    const isReturning = !!localStorage.getItem("_visited");
    if (!isReturning) localStorage.setItem("_visited", "1");
    return {
      language: navigator.language || "",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
      screen: `${screen.width}x${screen.height}`,
      is_returning: isReturning,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      connection: (navigator as any).connection?.effectiveType || "",
    };
  } catch {
    return {};
  }
}

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
    const signals = getVisitorSignals();
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_type,
        session_id: getSessionId(),
        page: window.location.pathname,
        referrer: document.referrer || null,
        ...utms,
        ...signals,
        extra: extra || {},
      }),
    });
  } catch {
    // tracking must never break the site
  }
}
