type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span
          className={`section-eyebrow ${
            align === "center" ? "justify-center flex" : ""
          } ${light ? "text-flow-300" : ""}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`flow-divider mt-4 ${align === "center" ? "mx-auto" : ""}`}
      />
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-mist-200" : "text-navy-700/80"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
