import styled from 'styled-components';
import { ParameterType } from '../types/Types';

interface ParameterProps {
  parameter: ParameterType;
}

export default function Parameter({ parameter }: ParameterProps) {
  return (
    <ParameterWrapper>
      <ParameterBox>
        <ParameterNameWrapper>
          <ParameterNameBox>{parameter.name}</ParameterNameBox>
          <ParameterRequiredBox>{parameter.required}</ParameterRequiredBox>
          <ParameterTypeBox>
            {parameter.schema.type}
            {parameter.schema.type === 'integer'
              ? `(${parameter.schema.format})`
              : ''}
          </ParameterTypeBox>
          <ParameterInBox>({parameter.in})</ParameterInBox>
        </ParameterNameWrapper>
        <ParameterDescriptionBox>
          {parameter.description}
        </ParameterDescriptionBox>
      </ParameterBox>
    </ParameterWrapper>
  );
}

const ParameterWrapper = styled.div`
  border: 1px solid black;
`;

const ParameterBox = styled.div`
  display: flex;
  border: 1px solid black;
`;

const ParameterNameWrapper = styled.div`
  border: 1px solid black;
`;

const ParameterNameBox = styled.div`
  border: 1px solid black;
`;

const ParameterRequiredBox = styled.div`
  border: 1px solid black;
`;

const ParameterTypeBox = styled.div`
  border: 1px solid black;
`;

const ParameterInBox = styled.div`
  border: 1px solid black;
`;

const ParameterDescriptionBox = styled.div`
  border: 1px solid black;
`;
