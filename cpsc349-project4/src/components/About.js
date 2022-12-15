
const About = () => {
    return (
        <div className="px-4 py-16 ">

            <section className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-slate-100 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                            <defs>
                                <pattern id="1d4040f3-9f3e-4ac7-b117-7d4009658ced" x="0" y="0" width=".135" height=".30">
                                    <circle cx="1" cy="1" r=".7"></circle>
                                </pattern>
                            </defs>
                            <rect fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)" width="52" height="24"></rect>
                        </svg>
                        <span className="relative">Welcome</span>
                    </span> {' '}
                    our lovely devs.
                </h2>
                <p className="text-base text-slate-100 md:text-lg">
                    The masterminds behind the Fortune 500 company known as Gyst.
                </p>
            </section>

            <section className="flex flex-col gap-3 items-center justify-center lg:flex-row text-slate-100">

                <div className="bg-mint-700 rounded-xl border-mint-900 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-mint-100 group">
                    <div className="flex flex-col justify-center items-center gap-10">
                        <div className="flex flex-col items-center gap-6">

                            <div className="flex gap-6 items-center">
                                <img src="/" alt="github profile picture" className="w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"></img>
                                <h1 className="text-2xl font-semibold transition duration-200 ease-linear hover:text-mint-100">Name</h1>
                            </div>
                            <p className="transition duration-200 ease-linear hover:text-mint-100 text-center">Job Title</p>
                            <p className="text-gray-400 italic w-64 h-full transition duration-200 ease-linear hover:text-gray-200 text-center text-sm">Quote</p>
                        </div>
                        <a href="/" target="_blank" className="w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-mint-900 transition duration-200 rounded shadow-md bg-mint-100 hover:bg-mint-50 hover:scale-105">
                            GitHub Repo
                        </a>
                    </div>
                </div>

                <div className="bg-mint-700 rounded-xl border-mint-900 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-mint-100 group">
                    <div className="flex flex-col justify-center items-center gap-10">
                        <div className="flex flex-col items-center gap-6">

                            <div className="flex gap-6 items-center">
                                <img src="/" alt="github profile picture" className="w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"></img>
                                <h1 className="text-2xl font-semibold transition duration-200 ease-linear hover:text-mint-100">Name</h1>
                            </div>
                            <p className="transition duration-200 ease-linear hover:text-mint-100 text-center">Job Title</p>
                            <p className="text-gray-400 italic w-64 h-full transition duration-200 ease-linear hover:text-gray-200 text-center text-sm">Quote</p>
                        </div>
                        <a href="/" target="_blank" className="w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-mint-900 transition duration-200 rounded shadow-md bg-mint-100 hover:bg-mint-50 hover:scale-105">
                            GitHub Repo
                        </a>
                    </div>
                </div>

                <div className="bg-mint-700 rounded-xl border-mint-900 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-mint-100 group">
                    <div className="flex flex-col justify-center items-center gap-10">
                        <div className="flex flex-col items-center gap-6">

                            <div className="flex gap-6 items-center">
                                <img src="/" alt="github profile picture" className="w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"></img>
                                <h1 className="text-2xl font-semibold transition duration-200 ease-linear hover:text-mint-100">Name</h1>
                            </div>
                            <p className="transition duration-200 ease-linear hover:text-mint-100 text-center">Job Title</p>
                            <p className="text-gray-400 italic w-64 h-full transition duration-200 ease-linear hover:text-gray-200 text-center text-sm">Quote</p>
                        </div>
                        <a href="/" target="_blank" className="w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-mint-900 transition duration-200 rounded shadow-md bg-mint-100 hover:bg-mint-50 hover:scale-105">
                            GitHub Repo
                        </a>
                    </div>
                </div>
            </section> 
        </div>
    )
}

export default About
