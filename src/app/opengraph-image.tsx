import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Exit Insights — AI-Powered Employee Knowledge Transfer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#38bdf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
              color: "#0f172a",
            }}
          >
            EI
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#f8fafc",
              letterSpacing: "-1px",
            }}
          >
            Exit Insights
          </div>
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            maxWidth: "700px",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          AI-Powered Employee Knowledge Transfer
        </div>
        <div
          style={{
            marginTop: "32px",
            display: "flex",
            gap: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px 24px",
              background: "rgba(56, 189, 248, 0.1)",
              borderRadius: "12px",
              border: "1px solid rgba(56, 189, 248, 0.2)",
            }}
          >
            <div style={{ fontSize: "32px", fontWeight: 800, color: "#38bdf8" }}>42%</div>
            <div style={{ fontSize: "14px", color: "#94a3b8" }}>Knowledge Lost</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px 24px",
              background: "rgba(56, 189, 248, 0.1)",
              borderRadius: "12px",
              border: "1px solid rgba(56, 189, 248, 0.2)",
            }}
          >
            <div style={{ fontSize: "32px", fontWeight: 800, color: "#38bdf8" }}>11</div>
            <div style={{ fontSize: "14px", color: "#94a3b8" }}>AI Documents</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px 24px",
              background: "rgba(56, 189, 248, 0.1)",
              borderRadius: "12px",
              border: "1px solid rgba(56, 189, 248, 0.2)",
            }}
          >
            <div style={{ fontSize: "32px", fontWeight: 800, color: "#38bdf8" }}>$1.5K</div>
            <div style={{ fontSize: "14px", color: "#94a3b8" }}>Per Departure</div>
          </div>
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "16px",
            color: "#64748b",
          }}
        >
          exit-insights.com
        </div>
      </div>
    ),
    { ...size }
  );
}
