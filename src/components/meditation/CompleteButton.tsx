import { motion } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

export function CompleteButton({ onComplete }: Props) {
  return (
    <button
      onClick={onComplete}
      className="w-full py-4 px-8 bg-primary text-white rounded-full 
                text-center font-medium hover:bg-primary/90 transition-colors
                mt-8"
    >
      MARK AS COMPLETE
    </button>
  );
}