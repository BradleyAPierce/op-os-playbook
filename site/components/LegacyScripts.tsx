"use client";

import { useEffect } from "react";

type LegacyScriptsProps = {
  assetBase: string;
};

const scriptPaths = [
  "/assets/js/vendor/jquery.min.js",
  "/assets/js/vendor/bootstrap.min.js",
  "/assets/js/vendor/plugin.js",
  "/assets/js/vendor/vendor.js"
];
const legacyScriptVersion = "20260706";

function restoreJQueryGlobals() {
  const globalWindow = window as typeof window & {
    $?: unknown;
    jQuery?: unknown;
  };

  const jquery = globalWindow.jQuery ?? globalWindow.$;

  if (jquery) {
    globalWindow.$ = jquery;
    globalWindow.jQuery = jquery;
  }
}

async function loadScript(src: string) {
  const existing = document.querySelector<HTMLScriptElement>(`script[data-legacy-src="${src}"]`);

  if (existing?.dataset.loaded === "true") {
    return;
  }

  const response = await fetch(src);

  if (!response.ok) {
    throw new Error(`Failed to load legacy script: ${src}`);
  }

  const source = await response.text();
  const script = existing ?? document.createElement("script");
  script.type = "text/plain";
  script.dataset.legacySrc = src;

  if (!existing) {
    document.body.appendChild(script);
  }

  const runScript = new Function(
    "window",
    "document",
    "module",
    "exports",
    "define",
    `${source}\n//# sourceURL=${src}`
  );

  runScript(window, document, undefined, undefined, undefined);
  script.dataset.loaded = "true";
}

export function LegacyScripts({ assetBase }: LegacyScriptsProps) {
  useEffect(() => {
    let cancelled = false;

    async function loadLegacyScripts() {
      for (const path of scriptPaths) {
        if (cancelled) {
          return;
        }

        await loadScript(`${assetBase}${path}?v=${legacyScriptVersion}`);

        if (path.includes("jquery.min.js")) {
          restoreJQueryGlobals();
        }
      }
    }

    loadLegacyScripts().catch((error) => {
      console.error(error);
    });

    return () => {
      cancelled = true;
    };
  }, [assetBase]);

  return null;
}
