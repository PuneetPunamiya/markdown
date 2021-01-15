import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

function App() {
  const [readme, setReadme] = React.useState('');

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/tektoncd/catalog/master/task/tkn/0.2/README.md')
      .then((res) => res.text())
      .then((data) => setReadme(data));
  });

  return (
    <div className="App">
      <ReactMarkdown source={readme} renderers={{ code: CodeBlock }} />
    </div>
  );
}

export default App;
