import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "80px",
          background: "linear-gradient(135deg, #FBF7F1 0%, #F6E0DB 55%, #DCE4D8 100%)",
          direction: "rtl",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 999,
              background: "#73896C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
            }}
          >
            🌱
          </div>
          <div style={{ fontSize: 30, color: "#5B6E55", fontWeight: 700 }}>
            {site.role}
          </div>
        </div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 800,
            color: "#4A4038",
            lineHeight: 1.1,
            textAlign: "right",
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#6B5F54",
            marginTop: 24,
          }}
        >
          {site.name} · {site.serviceArea}
        </div>
      </div>
    ),
    { ...size }
  );
}
