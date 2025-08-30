'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import CodeBlock from '@tiptap/extension-code-block';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import HorizontalRule from '@tiptap/extension-horizontal-rule';

import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Code, 
  Heading1, 
  Heading2, 
  Heading3,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Underline as UnderlineIcon,
  Strikethrough,
  Minus,
  SeparatorHorizontal
} from 'lucide-react';
import { useEffect } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
        hardBreak: {
          keepMarks: true,
        },
      }),
      Highlight,
      CodeBlock.configure({
        HTMLAttributes: {
          class: 'bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-600',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-cyan-400 underline cursor-pointer',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg border border-gray-600',
        },
      }),
      Placeholder.configure({
        placeholder: placeholder || 'Start writing your blog post...',
        emptyEditorClass: 'is-editor-empty',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right', 'justify'],
      }),
      Underline,
      Strike,
      HorizontalRule,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none min-h-[300px] p-4',
      },
    },
    immediatelyRender: false,
  });

  // Update editor content when value prop changes
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [editor, value]);

  if (!editor) {
    return (
      <div className="h-64 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4" />
          <p>Loading editor...</p>
        </div>
      </div>
    );
  }

  const addLink = () => {
    const url = window.prompt('Enter URL:');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = () => {
    const url = window.prompt('Enter image URL:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const MenuDivider = () => (
    <div className="w-px h-6 bg-gray-600/50 mx-2" />
  );

  const MenuGroup = ({ children, title }: { children: React.ReactNode; title?: string }) => (
    <div className="flex items-center gap-1">
      {children}
    </div>
  );

  return (
    <div className="space-y-3">
      {/* Enhanced Horizontal Toolbar */}
      <div className="bg-gray-700/50 rounded-lg border border-gray-600/50 overflow-hidden">
        {/* Main Toolbar Row */}
        <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-600/50">
          {/* Text Formatting */}
          <MenuGroup title="Text Formatting">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive('bold') 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Bold (Ctrl+B)"
            >
              <Bold className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive('italic') 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Italic (Ctrl+I)"
            >
              <Italic className="w-4 h-4" />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive('underline') 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Underline (Ctrl+U)"
            >
              <UnderlineIcon className="w-4 h-4" />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive('strike') 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Strikethrough"
            >
              <Strikethrough className="w-4 h-4" />
            </button>
          </MenuGroup>

          <MenuDivider />

          {/* Headings */}
          <MenuGroup title="Headings">
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive('heading', { level: 1 }) 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Heading 1"
            >
              <Heading1 className="w-4 h-4" />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive('heading', { level: 2 }) 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Heading 2"
            >
              <Heading2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive('heading', { level: 3 }) 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Heading 3"
            >
              <Heading3 className="w-4 h-4" />
            </button>
          </MenuGroup>

          <MenuDivider />

          {/* Lists */}
          <MenuGroup title="Lists">
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive('bulletList') 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Bullet List"
            >
              <List className="w-4 h-4" />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive('orderedList') 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Numbered List"
            >
              <ListOrdered className="w-4 h-4" />
            </button>
          </MenuGroup>

          <MenuDivider />

          {/* Block Elements */}
          <MenuGroup title="Block Elements">
            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive('blockquote') 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Quote"
            >
              <Quote className="w-4 h-4" />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive('codeBlock') 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Code Block"
            >
              <Code className="w-4 h-4" />
            </button>

            <button
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              className="p-2 text-gray-300 hover:text-white hover:bg-gray-600/50 rounded transition-colors"
              title="Horizontal Rule"
            >
              <SeparatorHorizontal className="w-4 h-4" />
            </button>
          </MenuGroup>

          <MenuDivider />

          {/* Media & Links */}
          <MenuGroup title="Media & Links">
            <button
              onClick={addLink}
              className={`p-2 rounded transition-colors ${
                editor.isActive('link') 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Add Link"
            >
              <LinkIcon className="w-4 h-4" />
            </button>

            <button
              onClick={addImage}
              className="p-2 text-gray-300 hover:text-white hover:bg-gray-600/50 rounded transition-colors"
              title="Add Image"
            >
              <ImageIcon className="w-4 h-4" />
            </button>
          </MenuGroup>

          <MenuDivider />

          {/* Text Alignment */}
          <MenuGroup title="Text Alignment">
            <button
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive({ textAlign: 'left' }) 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Align Left"
            >
              <AlignLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive({ textAlign: 'center' }) 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Align Center"
            >
              <AlignCenter className="w-4 h-4" />
            </button>

            <button
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive({ textAlign: 'right' }) 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Align Right"
            >
              <AlignRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => editor.chain().focus().setTextAlign('justify').run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive({ textAlign: 'justify' }) 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
              title="Justify"
            >
              <AlignJustify className="w-4 h-4" />
            </button>
          </MenuGroup>
        </div>

        {/* Secondary Toolbar Row */}
        <div className="flex items-center justify-between gap-2 p-2">
          <div className="flex items-center gap-2">
            {/* History */}
            <MenuGroup title="History">
              <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().undo()}
                className="p-2 text-gray-300 hover:text-white hover:bg-gray-600/50 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
                title="Undo (Ctrl+Z)"
              >
                <Undo className="w-4 h-4" />
              </button>

              <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().redo()}
                className="p-2 text-gray-300 hover:text-white hover:bg-gray-600/50 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
                title="Redo (Ctrl+Y)"
              >
                <Redo className="w-4 h-4" />
              </button>
            </MenuGroup>

            <MenuDivider />

            {/* Special Formatting */}
            <MenuGroup title="Special Formatting">
              <button
                onClick={() => editor.chain().focus().toggleHighlight().run()}
                className={`p-2 rounded transition-colors ${
                  editor.isActive('highlight') 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
                }`}
                title="Highlight"
              >
                <span className="text-xs font-bold">H</span>
              </button>
            </MenuGroup>
          </div>

          {/* Editor Info */}
          <div className="text-xs text-gray-400 px-2">
            {editor.storage.characterCount?.characters() || 0} characters
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className="bg-gray-800/50 border border-gray-600/50 rounded-lg overflow-hidden">
        <EditorContent 
          editor={editor} 
          className="min-h-[300px]"
        />
      </div>
    </div>
  );
}
