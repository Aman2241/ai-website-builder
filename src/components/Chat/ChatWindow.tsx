"use client";

import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import styles from "./ChatWindow.module.css";

interface Message {
    id: string;
    role: "user" | "ai";
    content: string;
}

interface ChatWindowProps {
    messages: Message[];
    onSendMessage: (content: string) => void;
    isGenerating?: boolean;
}

export default function ChatWindow({ messages, onSendMessage, isGenerating }: ChatWindowProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className={styles.window}>
            <div className={styles.messages}>
                {messages.length === 0 ? (
                    <div className={styles.emptyState}>
                        <p>Welcome to AI Builder.</p>
                        <p>Describe your website to get started.</p>
                    </div>
                ) : (
                    messages.map((msg) => (
                        <MessageBubble key={msg.id} role={msg.role} content={msg.content} />
                    ))
                )}
                {isGenerating && (
                    <div className={styles.loading}>AI is thinking...</div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <ChatInput onSend={onSendMessage} disabled={isGenerating} />
        </div>
    );
}
