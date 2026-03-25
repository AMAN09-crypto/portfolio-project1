import PageLayout from "../components/PageLayout";

export default function Education() {
  return (
    <PageLayout title="Education" subtitle="My academic journey so far">
      <div
        style={{
          maxWidth: "900px", // Adjusted width for a single container look
          width: "100% !important", // Ensure it spans the full width of the page
          background: "#ffffff !important", // White background for the container
          borderRadius: "12px", // Slightly rounded corners for a modern look
          padding: "28px 20px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.15) !important", // Softer shadow for a subtle effect
          margin: "0 auto",
        }}
      >
        {/* Card 1 */}
        <div style={card}>
          <h2 style={cardTitle}>BCA (Pursuing)</h2>
          <p style={cardText}>
            I’m currently pursuing <b>BCA</b>. I’m focusing on programming and
            building web projects.
          </p>

          <div style={tagRow}>
            <span style={tag}>Java</span>
            <span style={tag}>C++</span>
            <span style={tag}>Python</span>
          </div>
        </div>

        {/* Card 2 */}
        <div style={card}>
          <h2 style={cardTitle}>Matriculation (ISC Board)</h2>
          <p style={cardText}>
            Completed from <b>ISC Board</b> with <b>75%</b>.
          </p>
        </div>

        {/* Card 3 */}
        <div style={card}>
          <h2 style={cardTitle}>Current Focus</h2>
          <ul style={list}>
            <li>Frontend (React + Router)</li>
            <li>Backend (Node + Express)</li>
            <li>Database (MongoDB + Mongoose)</li>
            <li>Building portfolio projects</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}

const card = {
  background: "#ffffff",
  borderRadius: "16px",
  padding: "18px",
  marginBottom: "18px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.10)",
};

const cardTitle = { margin: "0 0 8px", fontSize: "22px", color: "#0f172a" };
const cardText = { margin: 0, color: "#334155", lineHeight: 1.6 };

const tagRow = { marginTop: "12px", display: "flex", gap: "10px", flexWrap: "wrap" };
const tag = {
  background: "#e2e8f0",
  color: "#0f172a",
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "14px",
};

const list = { margin: "8px 0 0", paddingLeft: "18px", color: "#334155", lineHeight: 1.8 };
