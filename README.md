# VectorShift Frontend Technical Assessment

## Overview

This project is a React Flow based pipeline builder developed as part of the VectorShift Frontend Technical Assessment.

Users can:

- Create and connect nodes visually
- Build custom pipelines
- Submit pipelines to the backend
- View node count, edge count, and DAG validation results

---

## Implemented Tasks

### Task 1: Node Abstraction

Created a reusable `BaseNode` component to reduce code duplication and simplify creation of new node types.

---

### Task 2: Additional Nodes

Implemented five new node types:

- Math Node
- Filter Node
- Delay Node
- Condition Node
- API Node

Each node is built using the shared BaseNode component.

---

### Task 3: Dynamic Text Node

Enhanced the Text Node to:

- Detect variables using `{{variable}}` syntax
- Automatically create input handles for detected variables
- Resize dynamically based on content

Example:

```
{{name}} {{age}} {{email}}
```

creates multiple input handles automatically.

---

### Task 4: Backend DAG Validation

Implemented pipeline validation using FastAPI.

Endpoint:

```
POST /pipelines/parse
```

Returns:

```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true
}
```

The backend uses graph traversal logic to determine whether the submitted pipeline is a Directed Acyclic Graph (DAG).

---

## Technologies Used

### Frontend

- React
- React Flow
- Zustand

### Backend

- FastAPI
- Python

---

## Running the Frontend

```bash
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## Running the Backend

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

---

## Features

- Drag and drop nodes
- Dynamic node creation
- Pipeline connections
- DAG validation
- Node and edge counting
- Backend integration
- Real-time submission results

---

## Example Result

After clicking Submit:

```
Nodes: 4
Edges: 3
Is DAG: true
```

or

```
Nodes: 4
Edges: 6
Is DAG: false
```
