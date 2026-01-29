import styles from "./MessageBubble.module.css";

interface MessageBubbleProps {
    role: "user" | "ai";
    content: string;
}

export default function MessageBubble({ role, content }: MessageBubbleProps) {
    return (
        <div className={`${styles.bubble} ${styles[role]}`}>
            {content}
        </div>
    );
}
