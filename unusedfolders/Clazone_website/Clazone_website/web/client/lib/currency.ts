export function formatINR(input: number | string | null | undefined) {
  if (input === null || input === undefined || input === "") return "₹0";
  const n = typeof input === "number" ? input : Number(String(input).replace(/[^0-9.-]+/g, ""));
  if (Number.isNaN(n)) return String(input);

  // Format according to Indian grouping (e.g., 12,34,567.89)
  const parts = n.toFixed(2).split(".");
  let intPart = parts[0];
  const decPart = parts[1];

  // handle negative
  const isNegative = intPart.startsWith("-");
  if (isNegative) intPart = intPart.slice(1);

  if (intPart.length > 3) {
    const last3 = intPart.slice(-3);
    const rest = intPart.slice(0, -3);
    const restWithCommas = rest.replace(/\B(?=(?:\d{2})+(?!\d))/g, ",");
    intPart = restWithCommas + "," + last3;
  }

  return `${isNegative ? "-" : ""}₹${intPart}.${decPart}`;
}
