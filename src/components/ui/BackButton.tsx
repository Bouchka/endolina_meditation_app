import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      className="text-primary hover:opacity-80"
    >
      ← Back
    </button>
  );
}