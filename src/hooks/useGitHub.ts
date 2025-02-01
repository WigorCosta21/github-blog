import { GitHubContext } from "context/GitHubContext";
import { useContext } from "react";

export const useGitHub = () => {
  const context = useContext(GitHubContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
