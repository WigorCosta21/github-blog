import { api } from "lib/axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface UserProfile {
  html_url: string;
  avatar_url: string;
  name: string;
  login: string;
  followers: number;
  public_repos: string;
}

interface GitHubContexType {
  userProfile: UserProfile | null;
}

interface GitHubProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const GitHubContext = createContext({} as GitHubContexType);

export const GitHubProvider = ({ children }: GitHubProviderProps) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const fetchUserProfile = async () => {
    try {
      const response = await api.get("/users/WigorCosta21");

      return setUserProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <GitHubContext.Provider value={{ userProfile }}>
      {children}
    </GitHubContext.Provider>
  );
};
