import styled from 'styled-components';
import { BoardTypes } from '../../../types/board';
import * as React from 'react';

interface boardMapType {
  name: string;
  color: string;
}

const boardMap = new Map<string, boardMapType>([
  [BoardTypes.free, { name: '자유', color: '#e3d8ff' }],
  [BoardTypes.gather, { name: '모집', color: '#e3d8ff' }],
  [BoardTypes.review, { name: '후기', color: '#e3d8ff' }],
]);

const BoardTypeTag = React.memo(({ boardType }: { boardType: BoardTypes }) => {
  if (!boardType) return <></>;
  const { name, color } = boardMap.get(boardType) as boardMapType;
  return <TagContainer color={color}>{name}</TagContainer>;
});

export default BoardTypeTag;

const TagContainer = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33px;
  height: 30px;
  border-radius: 40px;

  color: var(--color-sub);
  font-size: 10px;
  font-weight: 800;

  background-color: ${(props) => props.color};
`;
