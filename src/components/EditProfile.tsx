const EditProfile = () => {

    const toggleProfileModal = () => {
        let profileModal = document.getElementById("profile-modal")
        let profileModalShade = document.getElementById("profile-modal-shade")

        if (profileModal && profileModalShade) {
            profileModal.classList.toggle("hidden")
            profileModal.classList.toggle("-translate-y-32")
            profileModalShade.classList.toggle("hidden")
            profileModalShade.classList.toggle("opacity-0")
        }
    }

    return (
        <>
            {/* // <!--Main modal-- > */ }
            <div onClick={ toggleProfileModal } id="profile-modal-shade" tabIndex={ 1 } className="overflow-y-auto hidden opacity-0 transition-all duration-200 overflow-x-hidden fixed top-0 right-0 left-0 z-30 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"></div>
            <div id="profile-modal" className="fixed z-40 transition-all hidden -translate-y-32 duration-200 lg:left-1/3 lg:top-16 p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */ }
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */ }
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Edit your profile
                        </h3>
                        <button onClick={ toggleProfileModal } type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */ }
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 outline-none dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
                            </div>
                            <div>
                                <label htmlFor="points" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Points which describe you</label>
                                <input type="text" name="points" id="points" placeholder="Talks about life, Everyday..." className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="shortDesc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your short description</label>
                                <textarea id="shortDesc" rows={ 2 } className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe yourself in short..."></textarea>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="longDesc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your long description</label>
                                <textarea id="longDesc" rows={ 3 } className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe yourself in long..."></textarea>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update your profile</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile