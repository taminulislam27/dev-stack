export default function Loader() {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-3 py-24">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500" />
      <p className="text-sm font-medium text-gray-500">Loading technologies…</p>
    </div>
  )
}
