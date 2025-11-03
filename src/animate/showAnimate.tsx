
import { useEffect, useState, Fragment, useRef } from 'react';
import type { ReactNode } from "react";

interface ShowProps{
  lines?: ReactNode[];
  delay?: number;

}

export default function ShowAnimation({ lines = [], delay = 220}: ShowProps) {
const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

    return (
        <div
            className={['transition-all duration-700',
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
            ].join(' ')}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {lines}
        </div>
    )
}