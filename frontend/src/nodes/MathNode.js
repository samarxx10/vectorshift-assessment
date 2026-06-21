import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const MathNode = ({ id }) => {

  const fields = [
    <>
      <label>
        Operation:
        <select>
          <option>Add</option>
          <option>Subtract</option>
          <option>Multiply</option>
          <option>Divide</option>
        </select>
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
      title="Math"
      nodeType="math"
      fields={fields}
      handles={handles}
    />
  );
};