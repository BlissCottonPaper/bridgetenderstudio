/**
 * One marker on the illuminated path — a lantern post standing over its step
 * name. Steps sit along a horizontal lantern rule (see the Process section).
 */
export function ProcessStep({
  label,
  index,
  total,
}: {
  label: string;
  index: number;
  total: number;
}) {
  return (
    <li className="relative flex flex-1 flex-col items-center text-center">
      {/* Lantern post: a glowing bulb on a slender stem meeting the path. */}
      <span aria-hidden="true" className="relative mb-4 flex flex-col items-center">
        <span className="h-3.5 w-3.5 rounded-full bg-ember shadow-lantern-strong animate-lantern-flicker" />
        <span className="h-6 w-px bg-gradient-to-b from-amber/70 to-stone" />
      </span>
      <span className="font-display text-[0.68rem] uppercase tracking-[0.22em] text-amber sm:text-xs">
        {label}
      </span>
      <span className="mt-1 font-body text-xs text-parchment/45">
        {index + 1} / {total}
      </span>
    </li>
  );
}
