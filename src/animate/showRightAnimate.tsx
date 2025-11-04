
import { useEffect, useState } from 'react';
import type { ReactNode } from "react";

interface ShowProps{
  lines?: ReactNode[];
  delay?: number;

}

export default function ShowRightAnimation({ lines = [], delay = 220}: ShowProps) {
const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

    return (
        <div
            className={['transition-all duration-1000',
                mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5',
            ].join(' ')}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {lines}
        </div>
    )
}