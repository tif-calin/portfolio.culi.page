import React from 'react';
import Prism from 'prismjs';

const CodeBlock = React.memo(({ language, code }) => {
  const highlighted = React.useMemo(() => {
    return Prism.highlight(code, Prism.languages[language], language);
  }, [language, code]);

  return (
    <pre>
      <code 
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      >
      </code>
    </pre>
  )

  // return (
  //   <SyntaxHighlighter
  //     language={language}
  //     customStyle={style}
  //     // showLineNumbers={true}
  //   >
  //     {code}
  //   </SyntaxHighlighter>
  // );
});

export default CodeBlock;
