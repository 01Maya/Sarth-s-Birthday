export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 py-5 px-4 border-t border-pink-300/40 shadow-lg">
      {/* Background shimmer effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="space-y-2 text-center">
          {/* Main copyright with styled Maya */}
          <p className="text-sm md:text-base font-medium text-gray-700 tracking-wide">
            <span>All rights reserved – Made by </span>
            <a
              href="https://myportfolio1it.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <span className="text-gray-800 font-semibold underline decoration-2 decoration-purple-400 underline-offset-2 hover:decoration-purple-600 transition-colors duration-300">
                Maya
              </span>
            </a>
          </p>

          {/* Email contact */}
          <div className="pt-2">
            <a
              href="mailto:patelmaya9812@gmail.com"
              className="text-sm md:text-base text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 inline-flex items-center gap-2 group"
            >
              <span className="group-hover:brightness-75 transition-all">📧</span>
              <span className="hover:underline decoration-purple-400 decoration-2 underline-offset-2">
                patelmaya9812@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
