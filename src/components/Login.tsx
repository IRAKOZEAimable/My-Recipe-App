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

    return (
        <div>
            <div>

                {/* Logo and Heading */}

                <div>
                    <div>

                        🥗

                    </div>

                    <h1>Recipe Planner</h1>
                    <p>Sign in to manage your daily meals</p>
                </div>

                {/* Login Form */}

                <form onSubmit={handleSubmit}>

                    {/* Email */}
                    <div>
                        <label htmlFor="email">
                        Email Address
                        </label>
                        <input 
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Enter your email"
                            required
                        />

                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input 
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Error message */}

                    {error && (
                        <p>{error}</p>
                    )}

                    {/* Submit button */}

                    <button type="submit">
                        Sign In
                    </button>
                </form>

                <p>Recipe Planner Dashboard</p>
            </div>
        </div>
    );

};

export default Login;