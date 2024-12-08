interface Props {
  error: string | null;
}

export function AuthError({ error }: Props) {
  if (!error) return null;

  return (
    <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-lg text-sm mb-6">
      <p className="flex items-center">
        <span className="mr-2">⚠️</span>
        {error}
      </p>
    </div>
  );
}