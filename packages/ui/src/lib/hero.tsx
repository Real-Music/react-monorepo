export type Props = {
  cta: string;
  title: string;
  subtitle: string;
  onCtaClick?: () => void;
};

export function Hero(props: Props) {
  return (
    <div
      style={{
        color: 'white',
        textAlign: 'center',
        padding: '100px 20px',
        backgroundColor: '#0202b9ff',
      }}
    >
      <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>{props.title}</h1>
      <p style={{ fontSize: '20px', marginBottom: '32px' }}>{props.subtitle}</p>
      <button
        onClick={props.onCtaClick}
        style={{
          border: 'none',
          color: 'white',
          fontSize: '18px',
          cursor: 'pointer',
          borderRadius: '50%',
          padding: '12px 24px',
          backgroundColor: '#05035bff',
        }}
      >
        {props.cta}
      </button>
    </div>
  );
}
