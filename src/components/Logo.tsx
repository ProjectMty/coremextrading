export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-brand-green to-brand-blue" />
      <span className="text-lg font-extrabold tracking-tight">
        <span className="text-brand-green">Core</span>
        <span className="text-brand-blue">Mex</span>
        <span className="text-gray-900"> Trading</span>
      </span>
    </div>
  );
}
