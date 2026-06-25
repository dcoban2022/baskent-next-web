import { neon } from "@neondatabase/serverless";

let _fn: ReturnType<typeof neon> | null = null;

function getInstance() {
  if (!_fn) {
    const url = process.env.POSTGRES_URL;
    if (!url) throw new Error("POSTGRES_URL is not configured");
    _fn = neon(url);
  }
  return _fn;
}

// Lazy wrapper that keeps the sql`` template literal API intact
export async function sql(
  strings: TemplateStringsArray,
  ...values: unknown[]
): Promise<Record<string, unknown>[]> {
  return getInstance()(strings, ...values) as Promise<Record<string, unknown>[]>;
}
