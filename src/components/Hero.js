
/* First third of the landing page */
const Hero = () => {
    return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mint-100">
                <svg className="w-10 h-10 text-mint-900" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-center max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-slate-100 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-mint-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                    <defs>
                      <pattern id="e77df901-b9d7-4b9b-822e-16b2d410795b" x="0" y="0" width=".135" height=".30">
                        <circle cx="1" cy="1" r=".7"></circle>
                      </pattern>
                    </defs>

                    <rect fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)" width="52" height="24"></rect>
                  </svg>

                  <span className="relative">The </span>
                </span>{' '}
          
                app that helps you get your life together.
              </h2>

              <p className="max-w-lg text-base text-slate-100 md:text-md">
                Gyst utilizes revolutionary <span className="font-medium">Web3 blockchain crypto technology</span> to ensure that you stay on top of what's important.
              </p>
            </div>

            <div>
              <a
                href="/signup"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-mint-900 transition duration-200 rounded shadow-md bg-mint-100 hover:bg-mint-50 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hero