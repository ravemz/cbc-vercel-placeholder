"use client";

import React, { useState } from "react";
import { Button } from "./button";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm({
  className = "",
  buttonLabel = "Join the Waitlist",
}: {
  className?: string;
  buttonLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "You're on the list!");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={`bg-cb-light-orange border border-cb-orange/20 rounded-md p-4 text-cb-orange font-medium ${className}`}>
        {message}
      </div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-stretch gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@domain.com"
          className="border border-gray-300 rounded-md w-full h-12 px-4 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cb-orange focus:border-transparent"
        />
        <Button type="submit" disabled={status === "loading"} className="h-12 px-6 text-base font-semibold whitespace-nowrap">
          {status === "loading" ? "Joining..." : buttonLabel}
        </Button>
      </form>
      {status === "error" && <p className="text-red-500 text-sm mt-2">{message}</p>}
    </div>
  );
}
