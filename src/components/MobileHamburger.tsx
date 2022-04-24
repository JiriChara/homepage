import './MobileHamburger.css';

interface MobileHamburgerProps {
  isActive: boolean;
  onToggle: () => void;
}

export default function MobileHamburger({ isActive, onToggle }: MobileHamburgerProps) {
  return (
    <button
      type="button"
      className={`hamburger block md:hidden${isActive ? ' open' : ''}`}
      onClick={onToggle}
    >
      <span className="hamburger-top bg-white" />
      <span className="hamburger-middle bg-white" />
      <span className="hamburger-bottom bg-white" />
    </button>
  );
}
