export function formatDate(date: Date) {
  const d = date.toLocaleString("default", { day: "2-digit" });
  const m = date.toLocaleString("default", { month: "short" });
  const y = date.getFullYear();
  return `${d} ${m} ${y}`;
}
