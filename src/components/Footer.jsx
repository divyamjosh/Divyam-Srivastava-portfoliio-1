import React, { useState, useEffect } from 'react';

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const jaipurTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTime(`${jaipurTime} IST`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative z-10 border-t border-line bg-surface/50 backdrop-blur-md py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-8">
        
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-ink">
            DS<span className="text-rose-500">.</span>
          </span>
          <span className="text-sm font-medium text-slate">
            © {new Date().getFullYear()} Divyam Srivastava.
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-slate">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="relative flex h-1.5 w-1.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-slate"></span>
            </span>
            Local Time: {time}
          </div>
          <a href="https://github.com/divyamjosh" target="_blank" rel="noreferrer" className="transition-colors hover:text-sky-600">GitHub</a>
          <a href="https://www.linkedin.com/in/divyam-srivastava-7940a0365" target="_blank" rel="noreferrer" className="transition-colors hover:text-sky-600">LinkedIn</a>
        </div>

      </div>
    </footer>
  );
}
