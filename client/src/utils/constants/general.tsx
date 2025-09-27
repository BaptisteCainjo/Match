export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://ton-backend-url.railway.app"
    : "http://localhost:5001";
