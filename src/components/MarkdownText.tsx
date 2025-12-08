// components/MarkdownContent.tsx
"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
interface Props {
  content: string;
}

export const MarkdownText = ({ content }: Props) => {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none prose-table:w-full prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: () => null,
          h3: ({ node, ...props }) => (
            <h3
              className="text-2xl font-serif font-semibold text-[#E63946] mt-6 mb-3 "
              {...props}
            />
          ),
          h4: ({ node, ...props }) => (
            <h4
              className="text-xl font-serif font-semibold mt-4 mb-2 "
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              className="text-muted-foreground leading-relaxed mb-4"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className="space-y-2 ml-6 mb-4" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="text-muted-foreground flex items-start">
              <span className="text-[#E63946] mr-2">•</span>
              <span {...props} />
            </li>
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-foreground " {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic text-foreground" {...props} />
          ),
          code: ({ node, ...props }) => (
            <code
              className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
