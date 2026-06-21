import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const ConditionNode = ({ id }) => {

  const fields = [
    <>
      <label>
        Expression:
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
      id: `${id}-true`,
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-false`,
    },
  ];

  return (
    <BaseNode
      title="Condition"
      fields={fields}
      handles={handles}
    />
  );
};