export default async function POST(req: Request) {
  const { VERCEL_TOKEN, VERCEL_PROJECT_ID, VERCEL_TEAM_ID } = process.env;

  try {
    // Validate the webhook payload (optional)
    const payload = await req.json();
    // Perform validation logic here (e.g., verify payload structure or use a secret token)

    // Trigger the Vercel Cache Purge
    const response = await fetch(
      `https://api.vercel.com/v1/integrations/deploy/${VERCEL_PROJECT_ID}/cache`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${VERCEL_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to purge cache: ${response.statusText}`);
    }

    return new Response(
      JSON.stringify({ message: "Cache purged successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
