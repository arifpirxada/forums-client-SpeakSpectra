import { Link } from 'react-router-dom'
// Image imports
import coronaImg from '../../assets/corona.jpg'
import movieImg from '../../assets/movie.jpg'
import phoneImg from '../../assets/phone.jpg'
import programmerImg from '../../assets/programmer.jpg'
import studyImg from '../../assets/study.jpg'
import watchImg from '../../assets/watch.jpg'

function ForumList() {
  return (
    <div className="dark:bg-gray-900">
      <h1 className="text-3xl dark:text-white font-extrabold py-8 text-center">
        Latest Queries
      </h1>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
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
                to={`/forum/forumId`}
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
            {/* 2nd Item */ }
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
              <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                Start with Design System
              </h2>
              <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore at debitis et soluta tenetur illum rem. Nostrum maxime laudantium veniam nulla animi accusamus, voluptatum maiores, doloribus nisi asperiores officia! Iure eius quia neque sit non optio obcaecati ipsa explicabo qui?
              </p>
              <Link
                to={`/forum/forumId`}
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
            {/* 3rd Item */ }
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
              <img src={ phoneImg } className="rounded-sm" alt="post image" />
              <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                Start with Design System
              </h2>
              <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                Static websites are now used to bootstrap lots of websites and...
              </p>
              <Link
                to={`/forum/forumId`}
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
            {/*  Item 4th*/ }
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
              <img src={ movieImg } className="rounded-sm" alt="post image" />
              <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                Start with Design System
              </h2>
              <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                Static websites are now used to bootstrap lots of websites and...
              </p>
              <Link
                to={`/forum/forumId`}
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
            {/* 5th Item */ }
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
              <img src={ programmerImg } className="rounded-sm" alt="post image" />
              <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                Start with Design System
              </h2>
              <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                Static websites are now used to bootstrap lots of websites and...
              </p>
              <Link
                to={`/forum/forumId`}
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
            {/* 6th Item */ }
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
              <img src={ watchImg } className="rounded-sm" alt="post image" />
              <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                Start with Design System
              </h2>
              <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                Static websites are now used to bootstrap lots of websites and...
              </p>
              <Link
                to={`/forum/forumId`}
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
              {/* <img src={ coronaImg } className="rounded-sm" alt="post image" /> */}
              <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                Start with Design System
              </h2>
              <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga praesentium laudantium delectus numquam autem voluptate aliquid vero consequatur animi aliquam sit ipsa veritatis beatae harum quibusdam earum distinctio ducimus veniam facilis quo vitae, exercitationem deleniti quisquam! Consequuntur ab reiciendis asperiores.
              </p>
              <Link
                to={`/forum/forumId`}
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
            {/* 7th Item */ }
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
              <img src={ studyImg } className="rounded-sm" alt="post image" />
              <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                Start with Design System
              </h2>
              <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                Static websites are now used to bootstrap lots of websites and...
              </p>
              <Link
                to={`/forum/forumId`}
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
            {/* 8th Item */ }
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
              {/* <img src={ coronaImg } className="rounded-sm" alt="post image" /> */}
              <h2 className="text-gray-900 dark:text-white mt-3 text-xl font-extrabold mb-2">
                Start with Design System
              </h2>
              <p className="font-normal text-gray-500 dark:text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis debitis eum a ratione doloribus at distinctio tempore quisquam. Dicta fugiat molestiae optio doloremque nam quidem amet earum temporibus possimus aliquam. Aliquam quos soluta sequi veritatis nemo dicta alias expedita?
              </p>
              <Link
                to={`/forum/forumId`}
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
      </section>
    </div>
  );
}

export default ForumList;
