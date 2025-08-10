export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Mock reply for now
  res.status(200).json({ reply: "✅ Mock reply: Bro Smartfarm AI connected on Vercel!" });
}
