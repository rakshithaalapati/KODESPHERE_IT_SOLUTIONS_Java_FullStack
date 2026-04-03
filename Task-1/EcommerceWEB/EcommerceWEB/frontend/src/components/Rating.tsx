export default function Rating({ value = 4 }: { value?: number }) {
  return (
    <div>
      {"★".repeat(Math.round(value))}{" "}
      {"☆".repeat(5 - Math.round(value))}
    </div>
  );
}