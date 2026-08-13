export default function Home() {
  const appName = process.env.APP_NAME;
  const appUrl = process.env.APP_URL;

  return (
    <div>
      <h1>Welcome to {appName}!</h1>
      <p>This is the home page of the second application.</p>
      <p>API URL: {appUrl}</p>
    </div>
  );
}