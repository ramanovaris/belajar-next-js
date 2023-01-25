import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>ini layout khusus untuk Dashboard</p>
      {children}
    </div>
  );
}
