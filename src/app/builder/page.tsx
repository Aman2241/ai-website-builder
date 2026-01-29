"use client";

import { useState } from "react";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import MainContent from "@/components/Layout/MainContent";
import ChatWindow from "@/components/Chat/ChatWindow";
import PreviewPane from "@/components/Preview/PreviewPane";
import { generateCode } from "@/lib/ai-mock";

interface Message {
    id: string;
    role: "user" | "ai";
    content: string;
}

export default function BuilderPage() {
    const [messages, setMessages] = useState<Message[]>([
        { id: "1", role: "ai", content: "Hi! Describe the website you want to build." },
    ]);
    const [generatedCode, setGeneratedCode] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    const handleSendMessage = async (content: string) => {
        // Add user message
        const newMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content,
        };
        setMessages((prev) => [...prev, newMessage]);
        setIsGenerating(true);

        try {
            // Call AI service
            const code = await generateCode(content);
            setGeneratedCode(code);

            // Add AI response
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: "I've generated a website based on your description. Check out the preview!",
            };
            setMessages((prev) => [...prev, aiResponse]);
        } catch (error) {
            console.error("Error generating code:", error);
            const errorResponse: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: "Sorry, I encountered an error while generating the website.",
            };
            setMessages((prev) => [...prev, errorResponse]);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
                <Sidebar>
                    <ChatWindow
                        messages={messages}
                        onSendMessage={handleSendMessage}
                        isGenerating={isGenerating}
                    />
                </Sidebar>
                <MainContent>
                    <PreviewPane code={generatedCode} />
                </MainContent>
            </div>
        </div>
    );
}
