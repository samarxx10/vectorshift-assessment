export const NODE_COLORS = {
  customInput: '#22c55e',
  customOutput: '#ef4444',
  text: '#3b82f6',
  llm: '#a855f7',
  delay: '#6b7280',
  math: '#06b6d4',
  filter: '#84cc16',
  condition: '#f97316',
  api: '#818cf8',
};

export const getNodeColor = (type) => NODE_COLORS[type] || '#6366f1';
