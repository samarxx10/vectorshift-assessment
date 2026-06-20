from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel  

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: list
    edges: list


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):

    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    graph = {}
    indegree = {}

    for node in pipeline.nodes:
        node_id = node["id"]
        graph[node_id] = []
        indegree[node_id] = 0

    for edge in pipeline.edges:
        source = edge["source"]
        target = edge["target"]

        graph[source].append(target)
        indegree[target] += 1

    queue = []

    for node in indegree:
        if indegree[node] == 0:
            queue.append(node)

    visited = 0

    while queue:
        current = queue.pop(0)
        visited += 1

        for neighbor in graph[current]:
            indegree[neighbor] -= 1

            if indegree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited == num_nodes

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }