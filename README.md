# Subgraph-EVM-Loans-V2

# Deploy

- In order to deploy a new subgraph for a new network, copy the polygon-subgraph folder and rename it to the network name. 
- Update the network name and contract addresses in the subgraph.yaml file.
- Then 
    ```
    graph codegen && graph build
    graph auth --product hosted-service AUTH_KEY
    graph deploy --product hosted-service THE_GRAPH_NAME
    ```
    