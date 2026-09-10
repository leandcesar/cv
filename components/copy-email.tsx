"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export function CopyEmail({ email, copyLabel, copiedLabel, errorLabel, className, iconOnly = false }: {
    email: string;
    copyLabel: string;
    copiedLabel: string;
    errorLabel: string;
    className?: string;
    iconOnly?: boolean;
}) {
    const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

    useEffect(() => {
        if (status === "idle") return;
        const timer = window.setTimeout(() => setStatus("idle"), 2000);
        return () => window.clearTimeout(timer);
    }, [status]);

    const handleCopy = async () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(email);
                setStatus("copied");
                return;
            }

            const textarea = document.createElement("textarea");
            textarea.value = email;
            textarea.setAttribute("readonly", "true");
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            textarea.style.pointerEvents = "none";
            document.body.appendChild(textarea);
            textarea.select();
            const copied = document.execCommand("copy");
            document.body.removeChild(textarea);
            setStatus(copied ? "copied" : "error");
        } catch {
            setStatus("error");
        }
    };

    const label = status === "copied" ? copiedLabel : status === "error" ? errorLabel : copyLabel;
    const Icon = status === "copied" ? Check : iconOnly ? Mail : Copy;
    const text = status === "copied" ? copiedLabel : status === "error" ? errorLabel : email;
    return <button type="button" className={`copy-email${iconOnly ? " copy-email-icon-only" : ""}${className ? ` ${className}` : ""}`} onClick={handleCopy} aria-label={label} title={label}>
        {iconOnly ? <Icon size={17} aria-hidden="true" /> : <>
            <span className="copy-email-text" aria-live="polite">{text}</span>
            <span className="copy-email-width" aria-hidden="true">{email}</span>
            <Icon size={14} aria-hidden="true" />
        </>}
    </button>;
}
