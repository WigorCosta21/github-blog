import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/globals";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { GitHubProvider } from "context/GitHubContext";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GitHubProvider>
        <RouterProvider router={router} />
      </GitHubProvider>
    </ThemeProvider>
  );
};

export default App;
