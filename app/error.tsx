"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <p>Disini ada Error</p>
      <button onClick={() => reset()}>Disini ada Error</button>
    </div>
  );
}
