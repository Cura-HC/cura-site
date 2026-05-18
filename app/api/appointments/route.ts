import { NextRequest, NextResponse } from "next/server";

const OPTIMANTRA_URL =
  "https://www.optimantra.com/optimus/om/dhtmlxschedadmin/getevents";

export async function GET(request: NextRequest) {
  const session = process.env.OPTIMANTRA_SESSION;
  const practIDs = process.env.OPTIMANTRA_PRACT_IDS;
  const locationID = process.env.OPTIMANTRA_LOCATION_ID;

  if (!session || !practIDs || !locationID) {
    return NextResponse.json(
      { error: "OptiMantra credentials not configured" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const startParam = searchParams.get("start");
  const endParam = searchParams.get("end");

  // Default to the current week (Mon–Sun) if no range is provided
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sun
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((dayOfWeek + 6) % 7));
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  const startMs = startParam
    ? new Date(startParam).getTime()
    : monday.getTime();
  const endMs = endParam ? new Date(endParam).getTime() : sunday.getTime();

  if (isNaN(startMs) || isNaN(endMs)) {
    return NextResponse.json(
      { error: "Invalid start or end date" },
      { status: 400 }
    );
  }

  const body = new URLSearchParams({
    mbrid: "1,0",
    isNew: "1,0",
    startDateTime: String(startMs),
    endDateTime: String(endMs),
    practID: practIDs,
    locations: locationID,
  });

  try {
    const response = await fetch(OPTIMANTRA_URL, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        accept: "*/*",
        "x-requested-with": "XMLHttpRequest",
        cookie: `OPTIMUSSESSION=${session}`,
        origin: "https://www.optimantra.com",
        referer:
          "https://www.optimantra.com/optimus/om/dhtmlxschedadmin/default",
      },
      body: body.toString(),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `OptiMantra responded with ${response.status}` },
        { status: 502 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("OptiMantra fetch error:", err);
    return NextResponse.json(
      { error: "Failed to reach OptiMantra" },
      { status: 502 }
    );
  }
}
