export function HasLogo({
  size = 'md',
  centered = false,
}: {
  size?: 'sm' | 'md' | 'lg';
  centered?: boolean;
}) {
  const width = size === 'sm' ? 70 : size === 'lg' ? 150 : 110;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: centered ? 'center' : 'flex-start',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          width,
          height: width * 0.55,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#b9943a',
          fontWeight: 900,
          fontSize: width * 0.28,
          letterSpacing: '0.08em',
        }}
      >
        HAS
      </div>
    </div>
  );
}
