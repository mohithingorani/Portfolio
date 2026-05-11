import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Mohit Hingorani Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#121212",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <img
            src="https://mohit.systems/mohit-avatar.png"
            alt="Avatar"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              border: "3px solid #fae79b",
            }}
          />
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.5px",
            }}
          >
            Mohit Hingorani
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#fae79b",
              fontWeight: 500,
            }}
          >
            Full Stack & AI Developer
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          mohit.systems
        </div>
      </div>
    ),
    { ...size }
  );
}