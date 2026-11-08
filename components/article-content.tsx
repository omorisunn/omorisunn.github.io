import hljs from "highlight.js";
import parse, { domToReact, Element, type DOMNode } from "html-react-parser";

import CodeBlock from "@/components/code-block";

export default function ArticleContent({ html }: { html: string }) {
  return (
    <div className="prose">
      {parse(html, {
        replace(node) {
          if (!(node instanceof Element) || node.name !== "pre") return;
          const code = node.children.find(
            (child): child is Element => child instanceof Element && child.name === "code",
          );
          if (!code) return;
          const language = code.attribs.class?.match(/\blanguage-([^\s]+)/)?.[1];
          const label = language
            ? hljs.getLanguage(language)?.name ?? language
            : "Text";
          return (
            <CodeBlock language={label}>
              {domToReact(node.children as DOMNode[])}
            </CodeBlock>
          );
        },
      })}
    </div>
  );
}
