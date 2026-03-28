'use client';

interface CodeBlockProps {
  language: string;
  code: string;
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  return (
    <div className="relative">
      <div className="flex items-center justify-between bg-gray-800 text-gray-300 text-xs px-4 py-2 rounded-t-lg">
        <span className="font-mono uppercase">{language}</span>
      </div>
      <pre className="bg-gray-900 text-gray-100 text-sm p-4 rounded-b-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
