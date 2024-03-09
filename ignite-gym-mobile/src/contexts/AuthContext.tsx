import { UserDTO } from "@dtos/UserDTO";
import { createContext } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: "1",
          name: "Simon",
          email: "simon@gmail.com",
          avatar: "simon.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
