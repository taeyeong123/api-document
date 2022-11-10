import { useEffect, useRef, useState } from 'react';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneDark,
  okaidia,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

var markdownString = `
  # 제목

  **굵게**

  일반 텍스트

  ---
  \`\`\`json
  {
    "key": "value"
  }
  \`\`\`

  ---
  \`\`\`java
  public static void main() {

  }
  \`\`\`
`;

const Content = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 1em;
  text-align: center;
  color: red;
`;

type Server = {
  description: String;
  url: String;
};

type Tag = {
  name: String;
  description: String;
};

type Api = {
  components: {
    schemas: {};
  };
  info: {
    title: String;
    version: String;
  };
  openapi: String;
  paths: {};
  servers: Server[];
  tags: Tag[];
};

function ApiDocument() {
  const [api, setApi] = useState<Api>();
  const [markdown, setMarkdown] = useState<string>('');
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      console.log();

      setMarkdown(String.raw`${markdownString}`);
    } else {
      fetch(
        'http://sell-up-test-server.ap-northeast-2.elasticbeanstalk.com/doc/v3/api-docs?group=courier_order',
        {
          method: 'get',
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setApi(data);
        });
      didMount.current = true;
    }
  }, [api]);

  useEffect(() => {
    console.log(markdown);
    console.log(markdownString);
  }, [markdown]);

  return (
    <div className="App">
      <Content>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ children }) {
              return (
                <SyntaxHighlighter style={okaidia} language="java" PreTag="div">
                  {String(children)}
                </SyntaxHighlighter>
              );
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </Content>
    </div>
  );
}

export default ApiDocument;
