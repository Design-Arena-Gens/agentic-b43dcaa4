"use client";

import { useMemo, useState } from 'react';

type Classification = {
  label: string;
  description: string;
  kind: 'nonpolar' | 'polar' | 'ionic';
};

const elements: Array<{ symbol: string; name: string; en: number }> = [
  { symbol: 'F', name: 'Fluorine', en: 3.98 },
  { symbol: 'O', name: 'Oxygen', en: 3.44 },
  { symbol: 'Cl', name: 'Chlorine', en: 3.16 },
  { symbol: 'N', name: 'Nitrogen', en: 3.04 },
  { symbol: 'Br', name: 'Bromine', en: 2.96 },
  { symbol: 'C', name: 'Carbon', en: 2.55 },
  { symbol: 'S', name: 'Sulfur', en: 2.58 },
  { symbol: 'P', name: 'Phosphorus', en: 2.19 },
  { symbol: 'H', name: 'Hydrogen', en: 2.20 },
  { symbol: 'B', name: 'Boron', en: 2.04 },
  { symbol: 'I', name: 'Iodine', en: 2.66 },
  { symbol: 'Na', name: 'Sodium', en: 0.93 },
  { symbol: 'K', name: 'Potassium', en: 0.82 },
];

function classify(deltaEN: number): Classification {
  if (deltaEN >= 1.8) {
    return {
      label: 'Ionic tendency',
      description:
        'Large ?EN suggests electron transfer; treat as ionic in first approximation.',
      kind: 'ionic',
    };
  }
  if (deltaEN >= 0.5) {
    return {
      label: 'Polar covalent',
      description:
        'Unequal sharing creates a bond dipole. Magnitude increases with ?EN and bond length.',
      kind: 'polar',
    };
  }
  return {
    label: 'Nonpolar covalent',
    description: 'Electrons shared nearly equally; negligible bond dipole.',
    kind: 'nonpolar',
  };
}

export default function PolarityPlayground() {
  const [atomA, setAtomA] = useState('H');
  const [atomB, setAtomB] = useState('Cl');

  const enA = useMemo(() => elements.find((e) => e.symbol === atomA)!.en, [atomA]);
  const enB = useMemo(() => elements.find((e) => e.symbol === atomB)!.en, [atomB]);
  const deltaEN = Math.abs(enA - enB);
  const result = classify(deltaEN);

  const arrowLength = Math.min(220, 40 + deltaEN * 80); // simple visual scale

  return (
    <div className="playground">
      <div className={`result-banner ${result.kind}`}>
        <strong>{result.label}</strong>
        <span>?EN = {deltaEN.toFixed(2)}</span>
      </div>

      <div className="controls">
        <label>
          Atom A
          <select value={atomA} onChange={(e) => setAtomA(e.target.value)}>
            {elements.map((el) => (
              <option key={el.symbol} value={el.symbol}>
                {el.symbol} ? {el.name} (EN {el.en})
              </option>
            ))}
          </select>
        </label>
        <label>
          Atom B
          <select value={atomB} onChange={(e) => setAtomB(e.target.value)}>
            {elements.map((el) => (
              <option key={el.symbol} value={el.symbol}>
                {el.symbol} ? {el.name} (EN {el.en})
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="visual">
        <div className="atom left">
          <div className="core">{atomA}</div>
          <div className="en">EN {enA.toFixed(2)}</div>
        </div>
        <div className="dipole" aria-label="Bond dipole visualization">
          <div className="arrow" style={{ width: `${arrowLength}px` }}>
            <span className="tail" />
            <span className="shaft" />
            <span className="head" />
          </div>
          <div className="delta">?+ ? ??</div>
        </div>
        <div className="atom right">
          <div className="core">{atomB}</div>
          <div className="en">EN {enB.toFixed(2)}</div>
        </div>
      </div>

      <p className="explanation">{result.description}</p>
    </div>
  );
}
