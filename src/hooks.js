import { useEffect } from "react";

export const ClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
        };
    });
};