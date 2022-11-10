import { useState } from 'react';
import styled from 'styled-components';
import { MethodType, PathType } from '../types/Types';
import Parameter from './parameter/Parameter';
import Parameters from './parameter/Parameters';
import Responses from './response/Responses';

interface PathProps {
  pathString: string;
  path: PathType;
}

export default function Path({ pathString, path }: PathProps) {
  const [pathTitleBoxStatus, setPathTitleBoxStatus] = useState(false);
  const pathTitleBoxOnclickHandler = () => {
    setPathTitleBoxStatus(!pathTitleBoxStatus);
  };

  return (
    <PathWrapper>
      <PathTitleBox onClick={pathTitleBoxOnclickHandler}>
        <Method>{getMethod(path)} - </Method>
        <PathString>{pathString} - </PathString>
        <Description>{path[getMethod(path)].summary}</Description>
      </PathTitleBox>
      {pathTitleBoxStatus && path[getMethod(path)].parameters ? (
        <Parameters parameters={path[getMethod(path)].parameters}></Parameters>
      ) : (
        <></>
      )}
      {pathTitleBoxStatus && (
        <Responses responses={path[getMethod(path)].responses}></Responses>
      )}
      <br />
    </PathWrapper>
  );
}

function getMethod(path: PathType): MethodType {
  if (path.post) {
    return 'post';
  } else if (path.get) {
    return 'get';
  } else if (path.update) {
    return 'update';
  } else if (path.put) {
    return 'put';
  } else {
    return 'delete';
  }
}

const PathWrapper = styled.div`
  border: 1px solid black;
`;

const PathTitleBox = styled.div`
  display: flex;
  border: 1px solid black;
  font-size: 22px;
`;

const Method = styled.div`
  border: 1px solid black;
`;

const PathString = styled.div`
  border: 1px solid black;
`;

const Description = styled.div`
  border: 1px solid black;
`;
