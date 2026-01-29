import styles from "./PreviewPane.module.css";

interface PreviewPaneProps {
    code: string;
}

export default function PreviewPane({ code }: PreviewPaneProps) {
    if (!code) {
        return (
            <div className={styles.container}>
                <div className={styles.placeholder}>
                    <h2>Preview</h2>
                    <p>Your generated website will appear here.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.frameWrapper}>
                <iframe
                    srcDoc={code}
                    className={styles.iframe}
                    title="Website Preview"
                    sandbox="allow-scripts"
                />
            </div>
        </div>
    );
}
