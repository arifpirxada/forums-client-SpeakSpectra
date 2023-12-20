import { Link } from "react-router-dom"
import EditProfile from "./EditProfile"
import coronaImg from "../assets/corona.jpg"

const Dashboard = () => {

    const toggleProfileModal = () => {
        let profileModal = document.getElementById("profile-modal")
        let profileModalShade = document.getElementById("profile-modal-shade")

        if (profileModal && profileModalShade) {
            profileModal.classList.toggle("hidden")
            setTimeout(() => {
                profileModal && profileModal.classList.toggle("-translate-y-32")
            }, 10);
            profileModalShade.classList.toggle("hidden")
            profileModalShade.classList.toggle("opacity-0")
        }
    }

    return (
        <>
            <EditProfile />
            <div className="w-full p-0 min-h-[91.2vh] lg:pt-16 lg:px-8 dark:bg-gray-900">
                <div className="flex flex-wrap lg:flex-nowrap">
                    {/* Profile section */ }

                    <main className="profile-page">
                        <section className="relative py-3 bg-blueGray-200">
                            <div className="container mx-0 p-0 lg:px-4">
                                <div className="w-screen relative flex flex-col min-w-0 break-words bg-gray-800 md:w-full mb-6 shadow-xl rounded-lg">
                                    <div className="px-2">
                                        <div className="flex flex-wrap justify-center items-center">
                                            <div className="flex justify-center flex-col">
                                                <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-28 align-middle border-none mt-8 mb-2" />
                                                <button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                                    Follow
                                                </button>
                                                <button onClick={ toggleProfileModal } className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                                    Edit Profile
                                                </button>
                                            </div>
                                            <div className="mx-2 md: ml-8 lg:ml-10">
                                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-200">
                                                    Jenna Stones
                                                </h3>
                                                <div className="text-sm leading-normal mt-0 mb-2 text-gray-200 font-bold uppercase">
                                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-200"></i>
                                                    Los Angeles, California
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="flex justify-center pt-10">
                                                <div className="mr-4 p-3 text-center overflow-x-visible">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-400">22</span><span className="text-sm font-bold text-gray-200">Followers</span>
                                                </div>
                                                <div className="mr-4 p-3 text-center overflow-x-visible">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-400">10</span><span className="text-sm font-bold text-gray-200">Posts</span>
                                                </div>
                                                <div className="lg:mr-4 p-3 text-center overflow-x-visible">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-400">89</span><span className="text-sm font-bold text-gray-200">Comments</span>
                                                </div>
                                            </div>
                                            <div className="mb-2 text-gray-400 mt-10">
                                                <i className="fas fa-briefcase mr-2 text-lg text-gray-200"></i>Solution Manager - Creative Tim Officer
                                            </div>
                                            <div className="mb-2 text-gray-400">
                                                <i className="fas fa-university mr-2 text-lg text-gray-200"></i>University of Computer Science
                                            </div>
                                        </div>
                                        <div className="mt-10 py-10 border-t border-gray-700 text-center">
                                            <div className="flex flex-wrap justify-center">
                                                <div className="w-full lg:w-9/12 px-4">
                                                    <p className="mb-4 text-lg leading-relaxed text-gray-400">
                                                        An artist of considerable range, Jenna the name taken by
                                                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                                                        performs and records all of his own music, giving it a
                                                        warm, intimate feel with a solid groove structure. An
                                                        artist of considerable range.
                                                    </p>
                                                    <a href="#" className="font-normal text-blue-500">Show more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Posts */ }
                                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-8  ">
                                        <h2 className="text-gray-900 dark:text-white text-2xl font-extrabold mb-6">
                                            Posts
                                        </h2>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {/* First Item */ }
                                            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                                                <div className="pb-3 sm:pb-4">
                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="w-8 h-8 rounded-full"
                                                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8"
                                                                alt="Neil image"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                Neil Sims
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                email@gmail.com
                                                            </p>
                                                        </div>
                                                        <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                                                            3 weeks ago
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={ coronaImg } className="rounded-sm" alt="post image" />
                                                <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                                                    Start with Design System
                                                </h2>
                                                <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                                                    Static websites are now used to bootstrap lots of websites and...
                                                </p>
                                                <Link
                                                    to={ `/forum/forumId` }
                                                    className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
                                                    Read more
                                                    <svg
                                                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 14 10">
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            {/* First Item */ }
                                            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                                                <div className="pb-3 sm:pb-4">
                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="w-8 h-8 rounded-full"
                                                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8"
                                                                alt="Neil image"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                Neil Sims
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                email@gmail.com
                                                            </p>
                                                        </div>
                                                        <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                                                            3 weeks ago
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={ coronaImg } className="rounded-sm" alt="post image" />
                                                <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                                                    Start with Design System
                                                </h2>
                                                <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                                                    Static websites are now used to bootstrap lots of websites and...
                                                </p>
                                                <Link
                                                    to={ `/forum/forumId` }
                                                    className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
                                                    Read more
                                                    <svg
                                                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 14 10">
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>

                                            {/* First Item */ }
                                            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                                                <div className="pb-3 sm:pb-4">
                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="w-8 h-8 rounded-full"
                                                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8"
                                                                alt="Neil image"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                Neil Sims
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                email@gmail.com
                                                            </p>
                                                        </div>
                                                        <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                                                            3 weeks ago
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={ coronaImg } className="rounded-sm" alt="post image" />
                                                <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                                                    Start with Design System
                                                </h2>
                                                <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                                                    Static websites are now used to bootstrap lots of websites and...
                                                </p>
                                                <Link
                                                    to={ `/forum/forumId` }
                                                    className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
                                                    Read more
                                                    <svg
                                                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 14 10">
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>

                                            {/* First Item */ }
                                            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                                                <div className="pb-3 sm:pb-4">
                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="w-8 h-8 rounded-full"
                                                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8"
                                                                alt="Neil image"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                Neil Sims
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                email@gmail.com
                                                            </p>
                                                        </div>
                                                        <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                                                            3 weeks ago
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={ coronaImg } className="rounded-sm" alt="post image" />
                                                <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                                                    Start with Design System
                                                </h2>
                                                <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                                                    Static websites are now used to bootstrap lots of websites and...
                                                </p>
                                                <Link
                                                    to={ `/forum/forumId` }
                                                    className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
                                                    Read more
                                                    <svg
                                                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 14 10">
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>

                                            {/* First Item */ }
                                            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                                                <div className="pb-3 sm:pb-4">
                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="w-8 h-8 rounded-full"
                                                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8"
                                                                alt="Neil image"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                Neil Sims
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                email@gmail.com
                                                            </p>
                                                        </div>
                                                        <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                                                            3 weeks ago
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={ coronaImg } className="rounded-sm" alt="post image" />
                                                <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                                                    Start with Design System
                                                </h2>
                                                <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                                                    Static websites are now used to bootstrap lots of websites and...
                                                </p>
                                                <Link
                                                    to={ `/forum/forumId` }
                                                    className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
                                                    Read more
                                                    <svg
                                                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 14 10">
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>

                                            {/* First Item */ }
                                            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                                                <div className="pb-3 sm:pb-4">
                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="w-8 h-8 rounded-full"
                                                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8"
                                                                alt="Neil image"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                Neil Sims
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                email@gmail.com
                                                            </p>
                                                        </div>
                                                        <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                                                            3 weeks ago
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={ coronaImg } className="rounded-sm" alt="post image" />
                                                <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                                                    Start with Design System
                                                </h2>
                                                <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                                                    Static websites are now used to bootstrap lots of websites and...
                                                </p>
                                                <Link
                                                    to={ `/forum/forumId` }
                                                    className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
                                                    Read more
                                                    <svg
                                                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 14 10">
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* side section */ }
                    <div className="dark:bg-gray-800 m-3 border lg:min-w-[24rem] h-fit border-gray-200 rounded-t-sm dark:border-gray-700 rounded-lg pt-2">
                        <div className="flex flex-wrap lg:flex-col">
                            {/* Notifications  */ }

                            <div className="w-full max-w-md p-4 bg-white border-none rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

                                <h2 className="text-gray-900 dark:text-white text-xl font-extrabold mb-6">
                                    Notifications
                                </h2>

                                <div id="toast-message-cta" className="w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
                                    <div className="flex">
                                        <div className="ms-3 text-sm font-normal">
                                            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
                                            <div className="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts.</div>
                                            <a href="#" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">View</a>
                                        </div>
                                        <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-message-cta" aria-label="Close">
                                            <span className="sr-only">Close</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>

                            {/* users */ }
                            <div className="w-full max-w-md p-4 bg-white border-none rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <h2 className="text-gray-900 dark:text-white text-xl font-extrabold mb-6">
                                    Suggested Users
                                </h2>
                                <div className="flow-root">
                                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        Neil Sims
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        4k Followers
                                                    </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    40 Posts
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        Bonnie Green
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        4k Followers
                                                    </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    30 Posts
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image" />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        Michael Gough
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        4k Followers
                                                    </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    89 Posts
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image" />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        Lana Byrd
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        4k Followers
                                                    </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    7 Posts
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pt-3 pb-0 sm:pt-4">
                                            <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image" />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        Thomes Lean
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        4k Followers
                                                    </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    39 Posts
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* side section End */ }

                </div>
            </div>
        </>
    )
}

export default Dashboard