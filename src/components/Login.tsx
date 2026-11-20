import { useState } from "react";
import type { FormEvent } from "react";
import { mockUsers } from "../data/users";

interface LoginProps {
    onLoginSuccess: () => void;
}

const Login = ({onLoginSuccess}: LoginProps) => {

    // 1. Manage email and password
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // 2. Manage error message
    const [error, setError] = useState<string>("");

    // 3. Handle form submission
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Check whether credentials match a user
        const user = mockUsers.find(
            (user) =>
                user.email === email.trim() && user.password === password
            );

            if (user) {
                setError("");
                onLoginSuccess();
            } else {
                setError("Invalid email or password. Please try again.");
            }
    };

}