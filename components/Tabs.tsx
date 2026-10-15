'use client';

import { createContext, useContext, useId, useState, type ReactNode } from 'react';

const Context = createContext({ active: '', setActive: (_value: string) => {}, uid: '' });

export function Tabs({ initial, children }: { initial: string; children: ReactNode }) {
  const [active, setActive] = useState(initial);
  const uid = useId().replaceAll(':', '');
  return <Context.Provider value={{ active, setActive, uid }}>{children}</Context.Provider>;
}

export function Tab({ value, className = '', children, label }: {
  value: string; className?: string; children: ReactNode; label?: string;
}) {
  const { active, setActive, uid } = useContext(Context);
  const selected = active === value;
  return <button type="button" role="tab" aria-label={label} id={`${uid}-${value}-tab`}
    aria-controls={`${uid}-${value}-panel`} aria-selected={selected}
    tabIndex={selected ? 0 : -1} className={`${className} ${selected ? 'active' : ''}`}
    onClick={() => setActive(value)}
    onKeyDown={(event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const tabs = Array.from(event.currentTarget.closest('[role="tablist"]')!.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
      const current = tabs.indexOf(event.currentTarget);
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      tabs[next]?.click(); tabs[next]?.focus();
    }}>{children}</button>;
}

export function TabPanel({ value, className = '', children }: {
  value: string; className?: string; children: ReactNode;
}) {
  const { active, uid } = useContext(Context);
  const selected = active === value;
  return <div id={`${uid}-${value}-panel`} role="tabpanel" aria-labelledby={`${uid}-${value}-tab`}
    tabIndex={0} hidden={!selected} className={`${className} ${selected ? 'show active' : ''}`}>{children}</div>;
}
