import styled from 'styled-components';

interface ResponseContentProps {
  mediaType: string;
  content: { schema: { $ref: string } };
}

export default function ResponseContent({
  mediaType,
  content,
}: ResponseContentProps) {
  return (
    <ResponseContentWrapper>
      <MediaTypeBox>{mediaType}</MediaTypeBox>
      <SchemaBox>{content.schema.$ref}</SchemaBox>
    </ResponseContentWrapper>
  );
}

const ResponseContentWrapper = styled.div``;

const MediaTypeBox = styled.div``;

const SchemaBox = styled.div``;
