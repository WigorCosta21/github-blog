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

interface Issues {
  id: number;
  title: string;
  body: string;
  html_url: string;
  created_at: string;
  comments: number;
  user: {
    login: string;
  };
}

interface GitHubContexType {
  userProfile: UserProfile | null;
  issues: Issues[];
  fetchSearchIssues: (query: string) => Promise<void>;
}

interface GitHubProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const GitHubContext = createContext({} as GitHubContexType);

export const GitHubProvider = ({ children }: GitHubProviderProps) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [issues, setIssues] = useState<Issues[]>([]);

  const fetchUserProfile = async () => {
    try {
      const response = await api.get("/users/WigorCosta21");

      return setUserProfile(response.data);
    } catch (error) {
      console.log("Error fetching user profile");
      console.log(error);
    }
  };

  const fetchIssues = async () => {
    try {
      const response = await api.get("/repos/WigorCosta21/github-blog/issues");

      return setIssues(response.data);
    } catch (error) {
      console.log("Error fetching issues");
      console.log(error);
    }
  };

  const userName = "WigorCosta21";
  const repo = "github-blog";

  const fetchSearchIssues = async (query: string) => {
    try {
      const response = await api.get("/search/issues", {
        params: {
          q: `${query} repo:${userName}/${repo}`,
        },
      });

      const responseUserIssues = response.data.items;

      return setIssues(responseUserIssues);
    } catch (error) {
      console.log("Error fetching issues");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
    fetchIssues();
  }, []);

  return (
    <GitHubContext.Provider value={{ userProfile, issues, fetchSearchIssues }}>
      {children}
    </GitHubContext.Provider>
  );
};
