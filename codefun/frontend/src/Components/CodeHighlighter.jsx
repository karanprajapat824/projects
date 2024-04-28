import React from 'react';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';

const CodeHighlighter = ({ code, language }) => {
  const highlightedCode = Prism.highlight(code, Prism.languages[language], language);
  return <pre dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
};

export default CodeHighlighter;
