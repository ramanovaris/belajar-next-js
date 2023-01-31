import React from "react";
import styles from "../../src/styles/Dashboard.module.css";
import "../../public/bootstrap/dist/css/bootstrap.min.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-dark text-blue-400 p-6">
      <p>ini layout khusus untuk Dashboard</p>
      {children}
    </div>
  );
}
