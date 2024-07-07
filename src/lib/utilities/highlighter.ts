import { codeToHtml } from "shiki";

const THEME = "github-dark";

async function highlighter(code: string, lang: string) {
  const html = codeToHtml(code, {
    lang,
    theme: "vesper",
  });

  return html;
}

export default highlighter;
