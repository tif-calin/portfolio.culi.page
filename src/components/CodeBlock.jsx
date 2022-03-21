import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import styles from '../style/_prism.css';

const CodeBlock = React.memo(({ language, code }) => {

  return (
    <SyntaxHighlighter
      language={language}
      // style={styles}
    >
      {code}
    </SyntaxHighlighter>
  );
});

export default CodeBlock;
