export default function Logo({ light = false }) {
  return (
    <a className={`logo${light ? ' logo--light' : ''}`} href="/" aria-label="Lumina Head Spa home">
      <img src="/images/brand/lumina-logo.webp" alt="" aria-hidden="true" />
    </a>
  );
}
