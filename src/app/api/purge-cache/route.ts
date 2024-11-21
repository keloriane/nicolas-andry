"use server";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("paoen");
  const { VERCEL_TOKEN, VERCEL_PROJECT_ID, VERCEL_TEAM_ID } = process.env;

  try {
    // Validate the webhook payload (optional)
    const payload = await request.json();
    // Perform validation logic here (e.g., verify payload structure or use a secret token)

    // Revalidate the cache for specific tags
    revalidateTag("sanity-content");

    // If you still want to purge the entire Vercel cache (not recommended as a first option)
    if (VERCEL_TOKEN && VERCEL_PROJECT_ID) {
      const response = await fetch(
        `https://api.vercel.com/v1/projects/${VERCEL_PROJECT_ID}/cache`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${VERCEL_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to purge Vercel cache: ${response.statusText}`);
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
