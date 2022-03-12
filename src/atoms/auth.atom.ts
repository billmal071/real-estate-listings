import { atom } from "recoil";

export type AuthAtom = {
  isLoggedIn: boolean;
  user: {
    name: string;
    password: string;
  } | null;
};

export default atom<AuthAtom>({
  key: "auth",
  default: {
    isLoggedIn: false,
    user: null,
  },
});
