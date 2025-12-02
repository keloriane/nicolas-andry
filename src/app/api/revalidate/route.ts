import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Get the secret token from environment variables
    const secret = request.headers.get("x-sanity-secret");
    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;

    // Validate the secret token
    if (!expectedSecret || secret !== expectedSecret) {
      console.error("Invalid or missing secret token");
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Parse the webhook payload
    const body = await request.json().catch(() => ({}));
    
    // Log the webhook event for debugging
    console.log("Sanity webhook received:", {
      type: body._type,
      id: body._id,
      timestamp: new Date().toISOString(),
    });

    // Revalidate the cache tag for all Sanity content
    revalidateTag("sanity-content");

    // Optionally purge Vercel cache if environment variables are set
    const { VERCEL_TOKEN, VERCEL_PROJECT_ID, VERCEL_TEAM_ID } = process.env;
    
    if (VERCEL_TOKEN && VERCEL_PROJECT_ID) {
      try {
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
          console.error("Vercel cache purge failed:", responseText);
          // Don't fail the request if Vercel cache purge fails
        }
      } catch (error) {
        console.error("Error purging Vercel cache:", error);
        // Don't fail the request if Vercel cache purge fails
      }
    }

    return NextResponse.json(
      { 
        message: "Cache revalidated successfully",
        revalidated: true,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Revalidation error:", error);
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

