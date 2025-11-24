import PolarityPlayground from '../components/PolarityPlayground';

export default function HomePage() {
  return (
    <div className="stack-xl">
      <section id="overview" className="card">
        <h2>Polar vs Nonpolar</h2>
        <p>
          Chemical bonds share electrons between atoms. If electrons are shared equally, the bond is
          <strong> nonpolar covalent</strong>. If electrons are pulled closer to one atom due to higher
          electronegativity, the bond is <strong>polar covalent</strong> and has a partial charge separation
          (a dipole). If the difference is very large, electrons are effectively transferred, producing an
          <strong> ionic</strong> bond.
        </p>
        <div className="grid-2">
          <div className="card subtle">
            <h3>Quick rules of thumb</h3>
            <ul>
              <li>?EN ? 0.0?0.4 ? nonpolar covalent</li>
              <li>?EN ? 0.5?1.7 ? polar covalent</li>
              <li>?EN ? 1.8 ? ionic character dominates</li>
            </ul>
          </div>
          <div className="card subtle">
            <h3>Molecule polarity depends on shape</h3>
            <p>
              A molecule can have polar bonds and still be <em>overall nonpolar</em> if its geometry cancels
              the dipoles (e.g., CO?). Bent or asymmetric molecules tend to be polar (e.g., H?O).
            </p>
          </div>
        </div>
      </section>

      <section id="examples" className="card">
        <h2>Examples</h2>
        <div className="grid-3">
          <div className="example">
            <div className="molecule nonpolar" aria-label="Nonpolar example: Cl2" />
            <h4>Cl? (nonpolar bond, nonpolar molecule)</h4>
            <p>Identical atoms share electrons equally. No dipole.</p>
          </div>
          <div className="example">
            <div className="molecule polar" aria-label="Polar bond example: HCl" />
            <h4>HCl (polar bond)</h4>
            <p>Cl is more electronegative than H; bond dipole points toward Cl.</p>
          </div>
          <div className="example">
            <div className="molecule bent" aria-label="Polar molecule example: H2O" />
            <h4>H?O (polar molecule)</h4>
            <p>Bent geometry prevents dipole cancellation; strong net dipole.</p>
          </div>
        </div>
      </section>

      <section id="playground" className="card">
        <h2>Polarity Playground</h2>
        <PolarityPlayground />
      </section>

      <section id="faq" className="card">
        <h2>FAQ</h2>
        <details>
          <summary>How do I estimate electronegativity difference (?EN)?</summary>
          <p>Use Pauling electronegativities from a periodic table. Subtract smaller from larger.</p>
        </details>
        <details>
          <summary>Can a molecule with polar bonds be nonpolar overall?</summary>
          <p>Yes. If vector sum of bond dipoles cancels due to symmetry (e.g., CO?, BF?).</p>
        </details>
        <details>
          <summary>Is the ?EN threshold fixed?</summary>
          <p>It is a guideline. Real bonding is a continuum; geometry and context matter.</p>
        </details>
      </section>
    </div>
  );
}
