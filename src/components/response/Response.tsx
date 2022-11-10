import styled from 'styled-components';
import { ResponseContentType, ResponseType } from '../../types/Types';
import ResponseContent from './ResponseContent';

interface ResponseProps {
  statusCode: string;
  response: ResponseType;
}

export default function Response({ statusCode, response }: ResponseProps) {
  return (
    <ResponseWrapper>
      <StatusCodeBox>{statusCode}</StatusCodeBox>
      <DescriptionBox>{response.description}</DescriptionBox>
      {response.content &&
        Object.entries(response.content).map(([mediaType, content]) => {
          return (
            <ResponseContent
              mediaType={mediaType}
              content={content}
            ></ResponseContent>
          );
        })}
    </ResponseWrapper>
  );
}

const ResponseWrapper = styled.div`
  display: flex;
  border: 1px solid black;
`;

const StatusCodeBox = styled.div`
  border: 1px solid black;
`;

const DescriptionBox = styled.div`
  border: 1px solid black;
`;

const MediaTypeBox = styled.div`
  border: 1px solid black;
`;
