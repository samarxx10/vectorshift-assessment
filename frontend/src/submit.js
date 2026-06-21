import { useState } from "react";
import { useStore } from "./store";
import { AnalysisResultCard } from "./AnalysisResultCard";

export const SubmitButton = () => {

    const { nodes, edges } = useStore();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {

        setLoading(true);
        setResult(null);
        setError(null);

        try {

            const response = await fetch(
                "http://localhost:8000/pipelines/parse",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nodes,
                        edges
                    })
                }
            );

            const data = await response.json();
            setResult(data);

        } catch (err) {
            console.error(err);
            setError("Backend Error");
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setResult(null);
        setError(null);
    };

    return (
        <>
            <div className="submit-bar">
                <button
                    className="analyze-btn"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? (
                        <span className="analyze-btn__spinner" />
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                    )}
                    {loading ? 'Analyzing...' : 'Analyze Pipeline'}
                </button>
            </div>

            <AnalysisResultCard
                result={result}
                error={error}
                onClose={handleClose}
            />
        </>
    );
};
