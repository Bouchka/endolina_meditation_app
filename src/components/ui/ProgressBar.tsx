import clsx from 'clsx';

interface Props {
  progress: number;
  className?: string;
}

export function ProgressBar({ progress, className }: Props) {
  return (
    <div
      className={clsx(
        'h-1 bg-gray-200 rounded-full overflow-hidden',
        className
      )}
    >
      <div
        className="h-full bg-[#1B4B43] transition-all duration-200"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  );
}
