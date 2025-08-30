'use client';

import { useState } from 'react';
import { Bold, Italic, List, ListOrdered, Quote, Code } from 'lucide-react';

interface SimpleTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SimpleTextEditor({ value, onChange, placeholder }: SimpleTextEditorProps) {
  const [selection, setSelection] = useState({ start: 0, end: 0 });

  const handleTextareaSelect = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setSelection({
      start: target.selectionStart,
      end: target.selectionEnd
    });
  };

  const insertText = (before: string, after: string = '') => {
    const textBefore = value.substring(0, selection.start);
    const selectedText = value.substring(selection.start, selection.end);
    const textAfter = value.substring(selection.end);
    
    const newText = textBefore + before + selectedText + after + textAfter;
    onChange(newText);
    
    // Set cursor position after inserted text
    setTimeout(() => {
      const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
      if (textarea) {
        const newPosition = selection.start + before.length + selectedText.length + after.length;
        textarea.setSelectionRange(newPosition, newPosition);
        textarea.focus();
      }
    }, 0);
  };

  const formatText = (format: string) => {
    switch (format) {
      case 'bold':
        insertText('**', '**');
        break;
      case 'italic':
        insertText('*', '*');
        break;
      case 'code':
        insertText('`', '`');
        break;
      case 'quote':
        insertText('> ');
        break;
      case 'bullet':
        insertText('- ');
        break;
      case 'numbered':
        insertText('1. ');
        break;
      default:
        break;
    }
  };

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-3 bg-gray-700/50 rounded-lg border border-gray-600/50">
        <button
          onClick={() => formatText('bold')}
          className="p-2 text-gray-300 hover:text-white hover:bg-gray-600/50 rounded transition-colors"
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={() => formatText('italic')}
          className="p-2 text-gray-300 hover:text-white hover:bg-gray-600/50 rounded transition-colors"
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          onClick={() => formatText('code')}
          className="p-2 text-gray-300 hover:text-white hover:bg-gray-600/50 rounded transition-colors"
          title="Inline Code"
        >
          <Code className="w-4 h-4" />
        </button>
        <button
          onClick={() => formatText('quote')}
          className="p-2 text-gray-300 hover:text-white hover:bg-gray-600/50 rounded transition-colors"
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </button>
        <button
          onClick={() => formatText('bullet')}
          className="p-2 text-gray-300 hover:text-white hover:bg-gray-600/50 rounded transition-colors"
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={() => formatText('numbered')}
          className="p-2 text-gray-300 hover:text-white hover:bg-gray-600/50 rounded transition-colors"
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
      </div>

      {/* Textarea */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onSelect={handleTextareaSelect}
        rows={12}
        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200 resize-none font-mono text-sm"
        placeholder={placeholder || "Start writing your blog post...\n\nUse the toolbar above for basic formatting.\n\n**Bold text**\n*Italic text*\n`inline code`\n> Quote\n- Bullet list\n1. Numbered list"}
      />

      {/* Markdown Help */}
      <div className="text-xs text-gray-500 bg-gray-800/30 rounded-lg p-3">
        <p className="mb-2 font-medium text-gray-400">Markdown Formatting:</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>**text** = <strong className="text-white">Bold</strong></div>
          <div>*text* = <em className="text-white">Italic</em></div>
          <div>`code` = <code className="text-cyan-400">Inline Code</code></div>
          <div>&gt; text = Quote</div>
          <div>- item = Bullet list</div>
          <div>1. item = Numbered list</div>
        </div>
      </div>
    </div>
  );
}
