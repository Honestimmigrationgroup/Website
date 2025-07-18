export default function Loading() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading Australia page...</p>
      </div>
    </div>
  )
}
