// toolbar.js

import { DraggableNode } from './draggableNode';
import { ThemeToggle } from './ThemeToggle';

export const PipelineToolbar = ({ theme, onThemeChange }) => {

    return (
        <div className="toolbar">
            <div className="toolbar__header">
                <div className="toolbar__brand">
                    <div className="toolbar__logo">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="6" cy="6" r="2" />
                            <circle cx="18" cy="18" r="2" />
                            <circle cx="18" cy="6" r="2" />
                            <path d="M8 6h8M6 8v8M18 8v4M8 18h8" />
                        </svg>
                    </div>
                    <div>
                        <p className="toolbar__title">Pipeline Builder</p>
                        <p className="toolbar__subtitle">Drag nodes onto the canvas to build your workflow</p>
                    </div>
                </div>
                <div className="toolbar__actions">
                    <ThemeToggle theme={theme} onToggle={onThemeChange} />
                </div>
            </div>
            <p className="toolbar__palette-label">Node Palette</p>
            <div className="toolbar__palette">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />

                <DraggableNode type='math' label='Math' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='delay' label='Delay' />
                <DraggableNode type='condition' label='Condition' />
                <DraggableNode type='api' label='API' />
            </div>
        </div>
    );
};
