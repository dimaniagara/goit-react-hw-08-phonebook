const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Good choice starts here!{' '}
        <span role="img" aria-label="Greeting icon">
          0x260e 0xfe0f
        </span>
      </h1>
    </div>
  );
}
