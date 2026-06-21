import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const DelayNode = ({ id }) => {

  const fields = [
    <>
      <label>
        Seconds:
        <input type="number" defaultValue={1} />
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
      title="Delay"
      fields={fields}
      handles={handles}
    />
  );
};