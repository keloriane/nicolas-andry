import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { VERCEL_TOKEN, VERCEL_PROJECT_ID, VERCEL_TEAM_ID, PURGE_CACHE_SECRET } = process.env;

  try {
    // Optional: Validate secret token if provided
    if (PURGE_CACHE_SECRET) {
      const secret = request.headers.get("x-purge-secret");
      if (secret !== PURGE_CACHE_SECRET) {
        return NextResponse.json(
          { message: "Unauthorized" },
          { status: 401 }
        );
      }
    }

    // Validate the webhook payload (optional)
    const payload = await request.json().catch(() => ({}));

    // Revalidate the cache for specific tags
    revalidateTag("sanity-content");

    // If you still want to purge the entire Vercel cache (not recommended as a first option)
    if (VERCEL_TOKEN && VERCEL_PROJECT_ID) {
      const teamIdParam = VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : "";
      const response = await fetch(
        `https://api.vercel.com/v1/projects/${VERCEL_PROJECT_ID}/cache${teamIdParam}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${VERCEL_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const responseText = await response.text();
        console.error("Vercel API Error:", responseText);
        // Don't fail the request if Vercel cache purge fails
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
