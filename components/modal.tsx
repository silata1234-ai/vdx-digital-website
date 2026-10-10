"use client";

import { useEffect, useRef, type ReactNode } from "react";

let openModals = 0;
let previousOverflow = "";

// Native dialogs provide focus trapping, inert background content and focus return.
export function Modal({ children, labelId, className = "", onClose }: {
  children: ReactNode;
  labelId: string;
  className?: string;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current!;
    const returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (openModals++ === 0) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    dialog.showModal();
    return () => {
      dialog.close();
      if (--openModals === 0) document.body.style.overflow = previousOverflow;
      if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog
      ref={ref}
      className={`vdx-dialog ${className}`}
      aria-labelledby={labelId}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const items = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), [tabindex="0"]',
        )).filter((item) => item.getClientRects().length > 0);
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first?.focus();
        }
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
    >
      {children}
    </dialog>
  );
}
