export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Escuela Maestro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to the Teacher Education Platform
          </p>
          <p className="text-gray-600 mb-8">
            This application is powered by Next.js and Vercel Web Analytics to
            help us understand how educators interact with our platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                📚 Resources
              </h2>
              <p className="text-gray-600">
                Access comprehensive teaching materials and educational
                resources.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                👥 Community
              </h2>
              <p className="text-gray-600">
                Connect with other educators and share best practices.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                📊 Analytics
              </h2>
              <p className="text-gray-600">
                Track learning outcomes and student progress with data-driven
                insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
