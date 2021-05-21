import Link from "next/link"
export default function Footer() {
  return (
    <footer class="footer-1 bg-lightblue py-8 sm:py-12">
      <div class="container mx-auto px-1.5 tablet:px-4 desktop:px-0">
        <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div class="px-4 w-1/3 md:w-1/4">
            <Link href="/">
              <a className="flex items-center">
                <span className="sr-only">Logo</span>
                <img
                  className="h-8 desktop:w-auto"
                  src="/splitcheck-w-logo.png"
                />
                <span className="text-lg text-default font-bold ml-15">Help center</span>
              </a>
            </Link>
            <p className="text-base text-gray-500 pt-4 pb-4">
              All rights reserved.<br />
              SpltChek 2020
            </p>
          </div>
          <div class="px-4 w-1/3 md:w-1/4 xl:w-1/6">
            <h5 class="text-2xl	text-black-300 font-normal mb-6">Features</h5>
            <ul class="list-none footer-links">
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Cool stuff</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Random feature</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Team feature</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Stuff for developers</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Another one</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Last time</a>
              </li>
            </ul>
          </div>
          <div class="px-4 w-1/3 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 class="text-2xl	text-black-300 font-normal mb-6">Resources</h5>
            <ul class="list-none footer-links">
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Cool stuff</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Random feature</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Team feature</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Stuff for developers</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Another one</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Last time</a>
              </li>
            </ul>
          </div>
          <div class="px-4 w-1/3 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 class="text-2xl	text-black-300 font-normal mb-6">About</h5>
            <ul class="list-none footer-links">
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Cool stuff</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Random feature</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Team feature</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Stuff for developers</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Another one</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 border-b border-solid border-transparent hover:border-default hover:text-default">Last time</a>
              </li>
            </ul>
          </div>
          <div class="px-4 w-1/3 md:w-1/4 xl:w-1/6 mt-14">
            <ul class="list-none footer-links">
              <li class="mb-6">
                <a href="#" class="text-balck-300 font-normal	 border-b border-solid border-transparent hover:border-default hover:text-default">Cool stuff</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 font-normal	 border-b border-solid border-transparent hover:border-default hover:text-default">Random feature</a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-balck-300 font-normal border-b border-solid border-transparent hover:border-default hover:text-default">Team feature</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}