/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from "next/link"
import { Fragment } from 'react'

const navigation = [
  { name: 'Get Started', href: '/setStarted' },
  { name: 'Sell', href: '/sell' },
  { name: 'Hashtags', href: 'hashtags' },
  { name: 'Manage Store', href: 'mangeStore' },
  { name: 'B2B', href: 'b2b' },
]

export default function Example() {
  return (
    <div className=" bg-white overflow-hidden shadow">
      <div className="mx-auto container">
        <div className=" z-10 bg-white  w-full pt-3.5 pb-3.5">
          <Popover>
            {({ open }) => (
              <>
                <div className="px-30 desktop:px-0">
                  <nav
                    className="flex items-center justify-between sm:h-10"
                    aria-label="Global"
                  >
                    <div className="flex items-center">
                      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                          <div className="mr-1.5 flex items-center lg:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">Open main menu</span>
                              <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                          <Link href="/">
                            <a className="flex items-center">
                              <span className="sr-only">Workflow</span>
                              <img
                                className="h-6 desktop:h-8 desktop:w-auto"
                                src="/splitcheck-w-logo.png"
                              />
                              <span className="text-lg text-default font-bold ml-15 hidden lg:block">Help center</span>
                            </a>
                          </Link>

                        </div>
                      </div>
                      <div className="hidden lg:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.map((item) => (
                          <Link href={item.href} key={item.name}>
                            <a className="font-base text-black-300 border-b-4 border-transparent hover:border-default pb-20 transition duration-700 ease-in-out">
                              {item.name}
                            </a>
                          </Link>
                        ))}

                      </div>
                    </div>

                    <div>
                      <button className="text-14 tablet:text-base text-default font-bold w-120 h-30 tablet:w-160 tablet:h-40 rounded-md border-2 border-default bg-white hover:bg-default hover:text-white transition duration-500 ease-out">
                        To SplitCheck
                      </button>
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  {/* change md to lg */}
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 z-50 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt=""
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div>
                        <button className="text-base text-red-200 font-bold w-full tablet:w-140 h-48 rounded-md border-2 border-red-200 bg-white hover:bg-red-200 hover:text-white transition duration-500 ease-out">
                          To Splitcheck
                      </button>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </div>
  )
}
