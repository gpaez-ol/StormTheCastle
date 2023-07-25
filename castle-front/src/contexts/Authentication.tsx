import React from "react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { showNotification } from "@mantine/notifications";
import { UserLogin } from "types";
type AuthenticationContextValue = {
    authorized: boolean;
    loginMutation: UseMutationResult<void, unknown, UserLogin, unknown>;
    userId: string;
};
const AuthenticationContext =
    React.createContext<AuthenticationContextValue | null>(null);

function AuthenticationProvider(props: React.PropsWithChildren) {
    const { children } = props;
    const [authorized, setAuthorized] = React.useState(false);
    const [userId, setUserId] = React.useState("");
    const loginMutation = useMutation(
        async (user: UserLogin) => {
            // TODO: Add endpoint to be called for authentication
            if (user.username === 'tavop') {
                setUserId(user.username);
                setAuthorized(true);
            } else {
                console.log("No esta autorizado");
                throw new Error("Username and/or password is not correct")
            }
        },
        {
            onError: (error) => {
                showNotification({
                    message: (error as Error)?.message ?? "Something went wrong.",
                    color: "red",
                });
            },
        }
    );

    const contextValue = React.useMemo<AuthenticationContextValue>(
        () => ({
            authorized,
            loginMutation,
            userId,
        }),
        [authorized, loginMutation, userId]
    );

    return (
        <AuthenticationContext.Provider value={contextValue}>
            {children}
        </AuthenticationContext.Provider>
    );
}

function useAuthentication() {
    const context = React.useContext(AuthenticationContext);

    if (!context) {
        throw new Error(
            `Hook ${useAuthentication.name} must be called inside the ${AuthenticationProvider.name}`
        );
    }

    return context;
}

export type { AuthenticationContextValue };
export { AuthenticationProvider, useAuthentication };