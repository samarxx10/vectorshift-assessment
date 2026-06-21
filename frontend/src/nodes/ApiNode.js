import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const ApiNode = ({ id }) => {

  const fields = [
    <>
      <label>
        URL:
        <input type="text" />
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
      title="API"
      fields={fields}
      handles={handles}
    />
  );
};