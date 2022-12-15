
const Features = () => {
    return (
        <div>
            <div id="features" className="flex justify-center bg-mint-100 px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 row-gap-5 lg:grid-cols-3 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                    <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-mint-900 group-hover:scale-x-100"></div>
                        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-mint-900 group-hover:scale-y-100"></div>
                        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-mint-900 group-hover:scale-x-100"></div>
                        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-mint-900 group-hover:scale-y-100"></div>
      
                        <div className="relative p-5 bg-slate-100 rounded-sm">
                            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-mint-900 lg:mb-0">
                                    <svg className="w-8 h-8 text-mint-100" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </div>

                                <h6 className="font-semibold leading-5">Powerful Productivity</h6>
                            </div>
                            <p className="mb-2 text-sm text-gray-900">
                                We make productivity so easy. Gone are the days where you just check a box and call it a day. We have patented, scientifically-proven techniques powered by blockchain technology that will ensure that anything you have to do will be done in a matter of minutes.
                            </p>
                        </div>
                    </div>

                    <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">      
                        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-mint-900 group-hover:scale-x-100"></div>
                        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-mint-900 group-hover:scale-y-100"></div>
                        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-mint-900 group-hover:scale-x-100"></div>
                        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-mint-900 group-hover:scale-y-100"></div>
      
                        <div className="relative p-5 bg-slate-100 h-full rounded-sm">
                            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-mint-900 lg:mb-0">
                                    <svg className="w-8 h-8 text-mint-100" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </div>

                                    <h6 className="font-semibold leading-5">Tantilizing Time Management</h6>
                                </div>
                                <p className="mb-2 text-sm text-gray-900">
                                    I don't know what tantilizing means. It sounds good though.
                                    <br></br>
                                    Anyway, this is a to-do list app, so like time management is kind of an important thing here that, by nature, we achieve very well.
                                </p>
      </div>
    </div>

    <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
      <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-mint-900 group-hover:scale-x-100"></div>
      <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-mint-900 group-hover:scale-y-100"></div>
      <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-mint-900 group-hover:scale-x-100"></div>
      <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-mint-900 group-hover:scale-y-100"></div>
      
      <div className="relative p-5 bg-slate-100 rounded-sm">
        <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
          <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-mint-900 lg:mb-0">
            <svg className="w-8 h-8 text-mint-100" stroke="currentColor" viewBox="0 0 52 52">
              <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>

          <h6 className="font-semibold leading-5">Google Calendar Integration</h6>
        </div>
        <p className="mb-2 text-sm text-gray-900">
          You use Google Calendar, your dad uses Google Calendar, everyone uses Google Calendar. There's no escape from the grip that Google holds on the digital calendar space. Why fight it? That's why we added native integration so you never forget what to do.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
    )
}

export default Features
