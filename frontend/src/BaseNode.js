import { Handle, Position } from 'reactflow';
import { getNodeColor } from './nodeColors';

export const BaseNode = ({
    title,
    fields,
    handles = [],
    nodeType,
}) => {
    const accentColor = getNodeColor(nodeType);

    return (
        <div
            className="node-card"
            style={{ '--node-accent': accentColor }}
        >
            <div className="node-card__header">
                <div className="node-card__icon">
                    <span className="node-card__icon-dot" />
                </div>
                <span className="node-card__title">{title}</span>
            </div>

            <div className="node-card__body">
                {fields?.map((field, index) => (
                    <div key={index} className="node-card__field">
                        {field}
                    </div>
                ))}
            </div>

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
