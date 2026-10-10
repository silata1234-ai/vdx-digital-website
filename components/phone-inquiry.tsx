"use client";

import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Check, Copy, Phone, X } from "lucide-react";
import { companyInfo } from "@/lib/site-content";
import { Modal } from "./modal";

const InquiryContext = createContext<(() => void) | null>(null);
const displayPhone = companyInfo.phone.replace(/^(\d{4})(\d{3})(\d{3})$/, "$1 $2 $3");
const dialPhone = companyInfo.phone.replace(/^0/, "+359");

function PhoneDialog({ onClose }: { onClose: () => void }) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "manual">("idle");
  const numberRef = useRef<HTMLInputElement>(null);

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(companyInfo.phone);
      setCopyState("copied");
    } catch {
      numberRef.current?.focus();
      numberRef.current?.select();
      setCopyState("manual");
    }
  }

  return (
    <Modal labelId="phone-inquiry-title" className="phone-dialog" onClose={onClose}>
      <button className="dialog-close" type="button" onClick={onClose} aria-label="Затвори прозореца" autoFocus><X size={22}/></button>
      <div className="phone-dialog-icon"><Phone size={26}/></div>
      <p className="eyebrow">Да поговорим за Вашия проект</p>
      <h2 id="phone-inquiry-title">Доброто решение започва с разговор.</h2>
      <p className="phone-dialog-copy">Обадете се, за да обсъдим нуждите на бизнеса и да подготвим индивидуална оферта.</p>
      <label className="phone-number-label" htmlFor="inquiry-phone">Телефон за връзка</label>
      <input ref={numberRef} id="inquiry-phone" className="phone-number" value={displayPhone} readOnly onFocus={(event) => event.currentTarget.select()}/>
      <a className="button primary" href={`tel:${dialPhone}`}><Phone size={18}/> Обади се сега</a>
      <button className="button outline" type="button" onClick={copyPhone}>{copyState === "copied" ? <Check size={18}/> : <Copy size={18}/>} {copyState === "copied" ? "Номерът е копиран" : "Копирай номера"}</button>
      <p className="copy-status" role="status" aria-live="polite">{copyState === "manual" ? "Копирането е блокирано от браузъра. Номерът е маркиран — копирайте го ръчно." : copyState === "copied" ? "Готово — можете да поставите номера." : "VDX Digital · Уебсайтове и автоматизации"}</p>
    </Modal>
  );
}

export function PhoneInquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <InquiryContext.Provider value={() => setOpen(true)}>
    {children}
    {open && <PhoneDialog onClose={() => setOpen(false)}/>}
  </InquiryContext.Provider>;
}

export function InquiryButton({ children = "Поискай оферта", className = "button primary", onClick }: {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const openInquiry = useContext(InquiryContext);
  return <button type="button" className={className} aria-haspopup="dialog" onClick={() => { onClick?.(); openInquiry?.(); }}>
    {children}<ArrowRight size={17} aria-hidden="true"/>
  </button>;
}
