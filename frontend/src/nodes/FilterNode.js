import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const FilterNode = ({ id }) => {

  const fields = [
    <>
      <label>
        Condition:
        <input type="text" placeholder="value > 10" />
      </label>
    </>
  ];

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`,
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode
      title="Filter"
      nodeType="filter"
      fields={fields}
      handles={handles}
    />
  );
};