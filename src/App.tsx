import { Router } from "./Routes";
import { UserContextProvider } from "./context/UserContext";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <GlobalStyle />
        <Router />
      </UserContextProvider>
    </div>
  );
}

export default App;
