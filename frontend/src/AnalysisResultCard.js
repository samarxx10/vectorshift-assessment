export const AnalysisResultCard = ({ result, error, onClose }) => {
  if (!result && !error) return null;

  if (error) {
    return (
      <div className="result-card result-card--error">
        <div className="result-card__header">
          <div className="result-card__title-group">
            <div className="result-card__icon result-card__icon--error">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <div>
              <p className="result-card__title">Analysis Failed</p>
              <p className="result-card__subtitle">Could not reach the backend</p>
            </div>
          </div>
          <button type="button" className="result-card__close" onClick={onClose} aria-label="Dismiss">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="result-card__body">
          <p className="result-card__error-message">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="result-card">
      <div className="result-card__header">
        <div className="result-card__title-group">
          <div className="result-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div>
            <p className="result-card__title">Pipeline Analysis</p>
            <p className="result-card__subtitle">Validation complete</p>
          </div>
        </div>
        <button type="button" className="result-card__close" onClick={onClose} aria-label="Dismiss">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <div className="result-card__body">
        <div className="result-card__stat">
          <span className="result-card__stat-label">Nodes</span>
          <span className="result-card__stat-value">{result.num_nodes}</span>
        </div>
        <div className="result-card__stat">
          <span className="result-card__stat-label">Edges</span>
          <span className="result-card__stat-value">{result.num_edges}</span>
        </div>
        <div className="result-card__stat">
          <span className="result-card__stat-label">Is DAG</span>
          <span className={`result-card__badge ${result.is_dag ? 'result-card__badge--success' : 'result-card__badge--error'}`}>
            <span className="result-card__badge-dot" />
            {result.is_dag ? 'Valid' : 'Invalid'}
          </span>
        </div>
      </div>
    </div>
  );
};
