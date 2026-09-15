"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Tooltip } from "@/components/ui/tooltip";

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
    const text = status === "copied" ? copiedLabel : status === "error" ? errorLabel : email;
    const button = <button type="button" className={`copy-email${iconOnly ? " copy-email-icon-only" : ""}${className ? ` ${className}` : ""}`} data-status={status} onClick={handleCopy} aria-label={label}>
        {iconOnly ? <span className="copy-email-icon-swap" aria-hidden="true" data-state={status}>
            <Mail className="copy-email-icon-copy" size={17} />
            <Check className="copy-email-icon-check" size={17} />
        </span> : <>
            <span className="copy-email-text" aria-live="polite">{text}</span>
            <span className="copy-email-width" aria-hidden="true">{email}</span>
            <span className="copy-email-icon-swap" aria-hidden="true" data-state={status}>
                <Copy className="copy-email-icon-copy" size={14} />
                <Check className="copy-email-icon-check" size={14} />
            </span>
        </>}
    </button>;
    return iconOnly ? <Tooltip label={label}>{button}</Tooltip> : button;
}
