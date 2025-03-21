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

        const res = await fetch("http://localhost:8000/useractions/getusers/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email ,password }),
        });
        console.log(res);

        if (!res.ok) {
            alert("Response failed. Try again.");
            return;
        }
    
        const data = await res.json(); // Parse response JSON
        
        if(data.length == 0 || data.length > 1){
            alert("User not found. Try again.");
            return;
        }   
        else{
            router.push(`/home?username=${data[0].username}`);
        }
        // Check if users array is NOT empty

    };

    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <h2 className={styles.title}>Ninja Login</h2>

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
