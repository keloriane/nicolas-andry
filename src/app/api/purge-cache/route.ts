import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { VERCEL_TOKEN, VERCEL_PROJECT_ID, VERCEL_TEAM_ID } = process.env;

  try {
    if (!VERCEL_TOKEN || !VERCEL_PROJECT_ID || !VERCEL_TEAM_ID) {
      console.error("Missing required environment variables");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Validate the webhook payload (optional)
    const payload = await request.json();
    // Perform validation logic here (e.g., verify payload structure or use a secret token)

    // Revalidate the cache for specific tags
    revalidateTag("sanity-content");

    // If you still want to purge the entire Vercel cache (not recommended as a first option)
    if (VERCEL_TOKEN && VERCEL_PROJECT_ID) {
      const response = await fetch(
        `https://api.vercel.com/v1/projects/${VERCEL_PROJECT_ID}/cache?teamId=${VERCEL_TEAM_ID}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${VERCEL_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      const responseText = await response.text();
      console.log("Vercel API Response:", responseText);

      if (!response.ok) {
        console.error("Vercel API Error:", responseText);
        throw new Error(
          `Failed to purge Vercel cache: ${response.status} ${response.statusText}. Details: ${responseText}`
        );
      }
    }

    return NextResponse.json(
      { message: "Cache purged successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Cache purge error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "This endpoint only accepts POST requests" },
    { status: 405 }
  );
}
