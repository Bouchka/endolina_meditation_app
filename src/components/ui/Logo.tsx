export function Logo() {
  return (
    <div className="text-primary text-center mb-8">
      <div className="w-24 h-24 mx-auto mb-4">
        <img
          src="/icons/endolina.png"
          alt="Endolina"
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="font-serif text-3xl">
        28 days program
        <br />
        to <span className="text-primary">#claimyourcycle</span>
      </h1>
    </div>
  );
}
