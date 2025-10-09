import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="purcarte-blur p-2 border-b border-(--accent-a4) inset-shadow-sm inset-shadow-(color:--accent-a4) sticky bottom-0 flex items-center justify-center z-10">
      <p className="flex justify-center text-sm text-secondary-foreground theme-text-shadow whitespace-pre">
        {/* "Powered by Komari Monitor" 部分已被删除 */}
        Monitored by{" "}
        <a
          href="https://jk.0z0.tech/status/all"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition-colors">
          Uptime Kuma
        </a>
      </p>
    </footer>
  );
};

export default Footer;
