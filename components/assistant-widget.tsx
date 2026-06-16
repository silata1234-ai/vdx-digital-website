"use client";

import { useEffect, useState } from "react";
import { MessageCircleMore, X } from "lucide-react";

import { assistantLabels } from "@/lib/site-content";
import { AssistantFlowPanel, openAssistantEventName } from "./assistant-flow-panel";

export function AssistantWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleOpen() {
      setOpen(true);
    }

    window.addEventListener(openAssistantEventName, handleOpen);

    return () => window.removeEventListener(openAssistantEventName, handleOpen);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <button
        type="button"
        className="gold-button rounded-full"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? assistantLabels.closeAria : assistantLabels.openAria}
      >
        {open ? <X className="h-4 w-4" /> : <MessageCircleMore className="h-4 w-4" />}
        <span className="hidden sm:inline">
          {open ? assistantLabels.close : assistantLabels.open}
        </span>
      </button>

      {open ? (
        <div className="mt-4 w-[min(22rem,calc(100vw-1.5rem))] sm:w-[24rem]">
          <AssistantFlowPanel variant="widget" />
        </div>
      ) : null}
    </div>
  );
}
