import styled from 'styled-components';
import { ResponseType } from '../../types/Types';
import Response from './Response';

interface ResponsesProps {
  responses: any;
}

export default function Responses({ responses }: ResponsesProps) {
  return (
    <ResponsesWrapper>
      <ResponsesTitleBox>Responses</ResponsesTitleBox>
      <ResponsesColumnNameBox>
        <ResponsesCodeColumnBox>Code</ResponsesCodeColumnBox>
        <ResponsesDescriptionColumnBox>
          Description
        </ResponsesDescriptionColumnBox>
        <ResponsesLinksColumnBox>Links</ResponsesLinksColumnBox>
      </ResponsesColumnNameBox>
      {Object.entries(responses).map(([statusCode, response]) => {
        return (
          <Response
            statusCode={statusCode}
            response={response as ResponseType}
          ></Response>
        );
      })}
    </ResponsesWrapper>
  );
}

const ResponsesWrapper = styled.div`
  border: 1px solid black;
`;

const ResponsesTitleBox = styled.div`
  border: 1px solid black;
`;

const ResponsesColumnNameBox = styled.div`
  display: flex;
  border: 1px solid black;
`;

const ResponsesCodeColumnBox = styled.div`
  border: 1px solid black;
`;

const ResponsesDescriptionColumnBox = styled.div`
  border: 1px solid black;
`;

const ResponsesLinksColumnBox = styled.div`
  border: 1px solid black;
`;

const ResponseBox = styled.div`
  border: 1px solid black;
`;
