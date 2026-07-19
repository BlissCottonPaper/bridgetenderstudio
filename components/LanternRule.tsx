/**
 * The lantern rule — the studio's signature illuminated divider.
 * `short` renders the left-anchored heading accent; default spans the width.
 */
export function LanternRule({
  short = false,
  className = '',
}: {
  short?: boolean;
  className?: string;
}) {
  return (
    <hr
      role="presentation"
      className={`${short ? 'lantern-rule-short' : 'lantern-rule'} ${className}`}
    />
  );
}
