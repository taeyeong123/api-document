import styled from 'styled-components';
import { ParameterType } from '../types/Types';
import Parameter from './Parameter';

interface ParametersProps {
  parameters: ParameterType[];
}

export default function Parameters({ parameters }: ParametersProps) {
  return (
    <ParametersWrapper>
      <ParametersTitleBox>Parameters</ParametersTitleBox>
      <ParametersColumnTitleBox>
        <ParametersNameColumnBox>Name</ParametersNameColumnBox>
        <ParametersDescriptionColumnBox>
          Description
        </ParametersDescriptionColumnBox>
      </ParametersColumnTitleBox>
      <ParametersRowBox>
        {parameters.map((parameter) => {
          return <Parameter parameter={parameter}></Parameter>;
        })}
      </ParametersRowBox>
    </ParametersWrapper>
  );
}

const ParametersWrapper = styled.div`
  border: 1px solid black;
`;

const ParametersTitleBox = styled.div`
  border: 1px solid black;
`;

const ParametersColumnTitleBox = styled.div`
  display: flex;
  border: 1px solid black;
`;

const ParametersNameColumnBox = styled.div`
  border: 1px solid black;
`;

const ParametersDescriptionColumnBox = styled.div`
  border: 1px solid black;
`;

const ParametersRowBox = styled.div`
  border: 1px solid black;
`;
