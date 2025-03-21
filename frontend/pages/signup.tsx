import { useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/RegisterForm.module.css";

export default function SignupPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [message, setMessage] = useState("");

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("http://localhost:8000/useractions/signup/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        
        if (res.ok) {
            router.push(`/home?username=${username}`);
        } else {
            alert("Signup failed. Try again.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <h2 className={styles.title}>Ninja Registration</h2>

                {message && <p className={styles.message}>{message}</p>}

                <form onSubmit={handleSignup} className={styles.form}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Shinobi Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                        required
                        className={styles.input}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Secret Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Hidden Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>
                        Enter the Shadows
                    </button>
                </form>
            </div>
        </div>
    );
}
