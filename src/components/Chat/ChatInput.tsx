"use client";

import { useState, FormEvent, KeyboardEvent } from "react";
import styles from "./ChatInput.module.css";

interface ChatInputProps {
    onSend: (message: string) => void;
    disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
    const [input, setInput] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (input.trim() && !disabled) {
            onSend(input);
            setInput("");
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className={styles.inputContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <textarea
                    className={styles.textarea}
                    placeholder="Describe your website..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    disabled={disabled}
                />
                <button
                    type="submit"
                    className={styles.sendButton}
                    disabled={!input.trim() || disabled}
                    aria-label="Send message"
                >
                    ➤
                </button>
            </form>
        </div>
    );
}
