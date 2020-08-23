import React from "react";
import * as ReactDOM from "react-dom";
import { createHttpClient } from "mst-gql";
import { SubscriptionClient } from "subscriptions-transport-ws";

import { RootStore } from "./models/RootStore";
import { StoreContext } from "./models/reactUtils";
import App from "./App";


import 'mobx-react-lite/batchingForReactDom'

const gqlWsClient = new SubscriptionClient("ws://capable-reindeer-65.hasura.app/v1/graphql", {
  reconnect: true,
  connectionParams: {
    headers: { "X-Hasura-Admin-Secret": "evlkjubllilgzuiywilierdwlmlqnjhj" },
  },
});

const gqlHttpClient = createHttpClient(
  "https://capable-reindeer-65.hasura.app/v1/graphql",
  {
    headers: {
      "X-Hasura-Admin-Secret": "evlkjubllilgzuiywilierdwlmlqnjhj",
    },
  }
);

const rootStore = RootStore.create(undefined, {
  gqlHttpClient,
  gqlWsClient,
});

ReactDOM.render(
  <StoreContext.Provider value={rootStore}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);
