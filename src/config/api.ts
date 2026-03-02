export const API_BASE =
  typeof window !== "undefined" && window.location.hostname !== "localhost"
    ? "https://backend.adventband.org:3126"
    : "http://localhost:4000";
