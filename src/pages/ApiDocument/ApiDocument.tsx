import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const markdown = `
  # 제목

  **굵게**

  일반 텍스트

  ---
  \`\`\`json
  {
    "key": "value"
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
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      console.log(api?.openapi);
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

  return (
    <div className="App">
      <Content>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ children }) {
              return (
                <SyntaxHighlighter
                  style={atomOneDark}
                  language="json"
                  PreTag="div"
                >
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
