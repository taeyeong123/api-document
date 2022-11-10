import { useEffect, useRef, useState } from 'react';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneDark,
  okaidia,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import Tag from '../../components/Tag';
import { ApiType, MethodType, PathType } from '../../types/Types';

export default function ApiDocument() {
  const [api, setApi] = useState<ApiType>();
  const [markdown, setMarkdown] = useState<string>('');
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      setMarkdown(String.raw`${markdownString}`);
      Object.entries(api!.paths).forEach(([pathString, value]) => {
        Object.entries(value as PathType).forEach(([method, value]) => {
          Object.entries(value.responses).forEach(([response, value]) => {
            console.log(pathString);
            console.log(method);
            console.log(response);
            console.log('\n');
          });
        });
      });
    } else {
      fetch('https://test-api.sell-up.co.kr/doc/v3/api-docs', {
        method: 'get',
      })
        .then((res) => res.json())
        .then((data) => {
          setApi(data);
        });
      didMount.current = true;
    }
  }, [api]);

  return api ? (
    <ApiDocumentWrapper>
      <TitleWrapper>
        <Title>{api.info.title}</Title>
        <Version>{api.info.version}</Version>
      </TitleWrapper>
      {api.servers.map((server) => (
        <Server>
          {server.url} - {server.description}
        </Server>
      ))}
      {api.tags.map((tag) => {
        return (
          <Tag
            tag={tag}
            paths={Object.entries(api.paths).filter(([pathString, value]) => {
              const pathType = value as PathType;
              return pathType[getMethod(pathType)].tags.includes(tag.name);
            })}
          ></Tag>
        );
      })}
    </ApiDocumentWrapper>
  ) : (
    <></>
  );

  // return (
  //   <div className="App">
  //     <Content>
  //       <ReactMarkdown
  //         remarkPlugins={[remarkGfm]}
  //         components={{
  //           code({ children }) {
  //             return (
  //               <SyntaxHighlighter style={okaidia} language="java" PreTag="div">
  //                 {String(children)}
  //               </SyntaxHighlighter>
  //             );
  //           },
  //         }}
  //       >
  //         {markdown}
  //       </ReactMarkdown>
  //     </Content>
  //   </div>
  // );
}

function getMethod(pathType: PathType): MethodType {
  if (pathType.post) {
    return 'post';
  } else if (pathType.get) {
    return 'get';
  } else if (pathType.update) {
    return 'update';
  } else if (pathType.put) {
    return 'put';
  } else {
    return 'delete';
  }
}

const ApiDocumentWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  border: 1px solid black;
`;

const TitleWrapper = styled.div`
  display: flex;
  border: 1px solid black;
`;

const Title = styled.div`
  font-size: 50px;
  text-align: center;
  border: 1px solid black;
`;

const Version = styled.div`
  border: 1px solid black;
`;

const Server = styled.div`
  border: 1px solid black;
`;

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
