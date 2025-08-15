import { StrictMode } from "react";
import "./App.css";
import RootRouter from "./common/routers/RootRouter";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./common/clients/reactQueryClient";

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RootRouter />
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
