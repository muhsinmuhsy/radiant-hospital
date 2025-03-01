import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bold, Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, Image } from 'lucide-react';

const RichTextEditor = () => {
  const [content, setContent] = useState('');
  const fileInputRef = useRef(null);
  const editorRef = useRef(null);

  const formatText = (command) => {
    document.execCommand(command, false, null);
  };

  const handleAlignText = (alignment) => {
    document.execCommand('justify' + alignment, false, null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.className = 'max-w-full h-auto my-2';
        
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        range.insertNode(img);
        
        setContent(editorRef.current.innerHTML);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="w-full max-w-4xl p-4">
      <Tabs defaultValue="edit">
        <TabsList className="mb-4">
          <TabsTrigger value="edit">Editor</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="edit">
          <div className="mb-4 flex gap-2 border-b pb-2">
            <button
              onClick={() => formatText('bold')}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <Bold size={20} />
            </button>
            <button
              onClick={() => formatText('italic')}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <Italic size={20} />
            </button>
            <button
              onClick={() => formatText('underline')}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <Underline size={20} />
            </button>
            <div className="border-l mx-2" />
            <button
              onClick={() => formatText('insertUnorderedList')}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <List size={20} />
            </button>
            <button
              onClick={() => formatText('insertOrderedList')}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <ListOrdered size={20} />
            </button>
            <div className="border-l mx-2" />
            <button
              onClick={() => handleAlignText('Left')}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <AlignLeft size={20} />
            </button>
            <button
              onClick={() => handleAlignText('Center')}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <AlignCenter size={20} />
            </button>
            <button
              onClick={() => handleAlignText('Right')}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <AlignRight size={20} />
            </button>
            <div className="border-l mx-2" />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current.click()}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <Image size={20} />
            </button>
          </div>

          <div
            ref={editorRef}
            className="min-h-[300px] border rounded p-4 focus:outline-none"
            contentEditable
            onInput={(e) => setContent(e.currentTarget.innerHTML)}
          />
        </TabsContent>

        <TabsContent value="preview" className="min-h-[300px] border rounded p-4">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default RichTextEditor;