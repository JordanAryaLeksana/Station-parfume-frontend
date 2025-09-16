import { LoginData, RegisterData } from "@/Interface/IAuth";
import { AxiosError } from "axios";
import { atom, createStore } from "jotai";
import { atomWithStore } from "jotai-zustand";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthService } from "./api/auth";


export interface AuthState {
    isAuthenticated: boolean;
    error: string | null;
    token: {
        accessToken: string | null;
        refreshToken: string | null;
    };
    loading: boolean;
    user: {
        id?: number;
        name?: string;
        email?: string;
        role?: string;
        picture?: string;
    } | null;

    //actions
    login: (
        email: LoginData["email"],
        password: LoginData["password"]
    ) => Promise<void>;
    logout: () => Promise<void>;
    register: (
        name: RegisterData["name"],
        email: RegisterData["email"],
        password: RegisterData["password"]
    ) => Promise<void>;
    googleLogin: () => Promise<void>;
    refreshToken: () => Promise<void>;
    setError: (msg: string | null) => void;
}


export const AuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            isAuthenticated: false,
            error: null,
            token: {
                accessToken: null,
                refreshToken: null,
            },
            loading: false,
            user: null,

            login: async (_email, _password) => {
                set({ loading: true, error: null })
                try {
                    const data = await AuthService.login({
                        email: _email,
                        password: _password
                    })
                    set({
                        isAuthenticated: true,
                        token: { accessToken: data.accessToken, refreshToken: data.refreshToken },
                        user: {
                            id: data.id,
                            name: data.name,
                            email: data.email,
                            role: data.role,
                            picture: data.picture,
                        },
                        loading: false,
                    })
                } catch (e: unknown) {
                    if (e instanceof AxiosError) {
                        set({ error: e.response?.data.message || "Login failed" })
                    } else {
                        set({ error: "An unexpected error occurred" })
                    }
                }
            },
            googleLogin: async() => {
                try {
                    await AuthService.googleLogin("token");
                } catch (e: unknown) {
                    if (e instanceof AxiosError) {
                        set({ error: e.response?.data.message || "Google Login failed" })
                    } else {
                        set({ error: "An unexpected error occurred" })
                    }
                }
            },
            register: async (_name, _email, _password) => {
                set({ loading: true, error: null })
                try {
                    const data = await AuthService.register({
                        name: _name,
                        email: _email,
                        password: _password
                    })
                    set({
                        isAuthenticated: true,
                        token: { accessToken: data.accessToken, refreshToken: data.refreshToken },
                        user: {
                            id: data.id,
                            name: data.name,
                            email: data.email,
                            role: data.role,
                        },
                        loading: false,
                    })
                } catch (e: unknown) {
                    if (e instanceof AxiosError) {
                        set({ error: e.response?.data.message || "Registration failed" })
                    } else {
                        set({ error: "An unexpected error occurred" })
                    }
                }
            },

            logout: async () => {
                set({ loading: true, error: null })
                try {
                    await AuthService.logout()
                } catch (e: unknown) {
                    if (e instanceof AxiosError) {
                        set({ error: e.response?.data.message || "Logout failed" })
                    } else {
                        set({ error: "An unexpected error occurred" })
                    }
                }
            },


            refreshToken: async () => {
                try {
                    const refresh = get().token.refreshToken;
                    if (!refresh) return;
                    const data = await AuthService.refresh();
                    set({
                        token: {
                            accessToken: data.access_token,
                            refreshToken: data.refresh_token,
                        },
                    });
                } catch (err) {
                    console.error(err);
                    set({ isAuthenticated: false });
                }
            },

            setError: (msg) => set({ error: msg }),
        }), {
        name: "auth-storage",
        storage: createJSONStorage(() => localStorage),
    }
    )
)


export const AuthAtom = atomWithStore(AuthStore);
export const messageAtom = atom<{ type: string; title?: string; description?: string } | null>(null);
export const setMessageStore = createStore()