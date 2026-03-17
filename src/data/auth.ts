import { getAuth } from "firebase/auth";
import { app } from "./firebase"; // your firebase config file

export const auth = getAuth(app);