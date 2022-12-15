/* Copied straight from project 2, all I've changed is class -> className,
   everything else still needs to be updated for react and pocketbase integration */
const Login = () => {
    return (
      <div className="relative">
        <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="absolute inset-0 object-cover w-full h-full" alt="" />  
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-gray-900 rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center text-white sm:mb-6 sm:text-2xl">
                    Sign in
                  </h3>
                  <form action="/user/login" method="post">
                    <div className="mb-1 sm:mb-2">
                      <label for="username" className="inline-block text-white mb-1 font-medium">Username</label>
                      <input
                        placeholder="username"
                        required=""
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-mint-100 focus:outline-none focus:shadow-outline"
                        id="username"
                        name="username"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label for="password" className="inline-block text-white mb-1 font-medium">Password</label>
                      <input
                        placeholder="password"
                        required=""
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <a href="/user/forgot" aria-label="" className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-mint-100 hover:text-mint-50">
                          Forget your password?
                      </a>
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-mint-100 hover:bg-mint-50 focus:shadow-outline focus:outline-none"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login
