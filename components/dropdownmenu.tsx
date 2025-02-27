import React, { ReactNode } from 'react'

interface DropdownMenuProps {
  children: ReactNode;
  className?: string;
}

function DropdownMenu({ children, className = '' }: DropdownMenuProps) {
  return (
    <div className={`relative bg-slate-800 shadow-lg rounded-md z-[9999] ${className}`}>
      <div className="absolute h-3 -top-3 left-0 right-0 bg-transparent z-[9999]"></div>
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-slate-800"></div>
      <div className="relative z-[9999]">
        {children}
      </div>
    </div>
  )
}

export default DropdownMenu