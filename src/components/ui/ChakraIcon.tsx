import clsx from 'clsx';

const chakraIcons = {
  1: '⬤',
  2: '◉',
  3: '◈',
  4: '✦',
  5: '◎',
  6: '◇',
  7: '○',
} as const;

interface Props {
  chakraNumber: number;
  className?: string;
}

export function ChakraIcon({ chakraNumber, className }: Props) {
  const icon = chakraIcons[chakraNumber as keyof typeof chakraIcons] || '○';

  return <span className={clsx('text-2xl', className)}>{icon}</span>;
}
