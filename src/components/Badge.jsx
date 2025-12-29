export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand/10 text-brand px-2.5 py-0.5 text-xs font-medium">
      {children}
    </span>
  )
}
