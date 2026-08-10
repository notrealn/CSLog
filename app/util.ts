export function formatDate(date: Date) {
  const d = date.toLocaleString("default", { day: "2-digit" });
  const m = date.toLocaleString("default", { month: "short" });
  const y = date.getFullYear();
  return `${d} ${m} ${y}`;
}

export function floatEquals(a: number, b: number, error = 0.001) {
  return Math.abs(a - b) / (a + b) < error;
}
