import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../style/_prism.css';

const CodeBlock = React.memo(({ language, code }) => {

  return (
    <SyntaxHighlighter
      language={language}
    >
      {code}
    </SyntaxHighlighter>
  );
});

export default CodeBlock;
