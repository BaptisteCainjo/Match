export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://match-production-7ed9.up.railway.app"
    : "http://localhost:5001";
