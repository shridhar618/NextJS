export default function Home() {
  const appName = process.env.APP_NAME;
  const appUrl = process.env.APP_URL;

  return (
    <div>
      <h1>Welcome to {appName}!</h1>
      <p>This is the home page of the second application.</p>
      <p>API URL: {appUrl}</p>
      <p>College Name: {process.env.COLLEGE_NAME}</p>
      <p>Public API URL: {process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
}