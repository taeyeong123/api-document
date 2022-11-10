import styled from 'styled-components';
import { TagType } from '../types/Types';
import Path from './Path';

interface TagProps {
  tag: TagType;
  paths: [string, any][];
}

export default function Tag({ tag, paths }: TagProps) {
  return (
    <TagWrapper>
      <TitleWrapper>
        <TagName>{tag.name}</TagName>
        <TagDescription>{tag.description}</TagDescription>
      </TitleWrapper>
      {paths.map((path) => {
        return <Path path={path[1]} pathString={path[0]}></Path>;
      })}

      <br />
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
