import { Handle, Position } from 'reactflow';

export const BaseNode = ({
    title,
    fields,
    handles = [],
}) => {
    return (
        <div
            style={{
                width: 220,
                minHeight: 80,
                border: '1px solid black',
                padding: '10px',
                background: 'white',
            }}
        >
            <div>
                <strong>{title}</strong>
            </div>

            {fields?.map((field, index) => (
                <div key={index} style={{ marginTop: '8px' }}>
                    {field}
                </div>
            ))}

            {handles.map((handle, index) => (
                <Handle
                    key={index}
                    type={handle.type}
                    position={handle.position}
                    id={handle.id}
                    style={handle.style}
                />
            ))}
        </div>
    );
};