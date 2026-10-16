import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
  const rootEl = useRef(null);

  useEffect(() => {
    const editor = new Editor({
      el: rootEl.current,
      hideModeSwitch: true,
    });

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      onContentChange(content);
    });
  }, []);

  return <div ref={rootEl} />;
  // END
};

export default MarkdownEditor;
