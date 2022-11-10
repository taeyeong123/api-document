import { useState } from 'react';
import styled from 'styled-components';
import { TagType } from '../types/Types';
import Path from './Path';

interface TagProps {
  tag: TagType;
  paths: [string, any][];
}

export default function Tag({ tag, paths }: TagProps) {
  const [titleWrapper, setTitleWrapper] = useState(false);

  const onClickHandler = () => {
    setTitleWrapper(!titleWrapper);
  };

  return (
    <TagWrapper>
      <TitleWrapper onClick={onClickHandler}>
        <TagName>{tag.name}</TagName>
        <TagDescription>{tag.description}</TagDescription>
      </TitleWrapper>
      {titleWrapper &&
        paths.map((path) => {
          return <Path path={path[1]} pathString={path[0]}></Path>;
        })}

      <br />
      <br />
    </TagWrapper>
  );
}

const TagWrapper = styled.div`
  border: 1px solid black;
`;

const TitleWrapper = styled.div`
  display: flex;
  border: 1px solid black;
`;

const TagName = styled.div`
  border: 1px solid black;
  font-size: 30px;
`;

const TagDescription = styled.div`
  border: 1px solid black;
`;
