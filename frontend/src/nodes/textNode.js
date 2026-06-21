import { useState, useMemo } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const TextNode = ({ id, data }) => {

  const [currText, setCurrText] = useState(
    data?.text || '{{input}}'
  );

  const variables = useMemo(() => {
    const matches =
      currText.match(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g) || [];

    return matches.map((match) =>
      match.replace(/{{\s*|\s*}}/g, '')
    );
  }, [currText]);

  const fields = [
    <>
      <label>
        Text:
        <input
          type="text"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
        />
      </label>
    </>,
  ];

  const handles = [
    ...variables.map((variable, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${variable}`,
      style: {
        top: `${40 + index * 20}px`,
      },
    })),

    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode
      title="Text"
      fields={fields}
      handles={handles}
    />
  );
};