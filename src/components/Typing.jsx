// Typing.jsx
import { useEffect, useRef, useState } from "react";

/**
 * Typing component robusto:
 * - text: string da mostrare
 * - speed: ms per carattere
 * - delay: ms prima di iniziare
 */
export default function Typing({ text = "", speed = 50, delay = 0 }) {
    const [displayed, setDisplayed] = useState("");
    const timeoutRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        // reset del testo ad ogni cambiamento del testo/delay/speed
        setDisplayed("");

        // start dopo il delay
        timeoutRef.current = setTimeout(() => {
            let i = 0;
            // ogni tick aggiorno la slice completa (evita concat race)
            intervalRef.current = setInterval(() => {
                i += 1;
                setDisplayed(text.slice(0, i));
                if (i >= text.length) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
            }, speed);
        }, delay);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [text, speed, delay]);

    return <span>{displayed}</span>;
}
