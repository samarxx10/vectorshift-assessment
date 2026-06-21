import { useStore } from "./store";

export const SubmitButton = () => {

    const { nodes, edges } = useStore();

    const handleSubmit = async () => {

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

            alert(
                `Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag}`
            );

        } catch (err) {
            console.error(err);
            alert("Backend Error");
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};