export function UserDropdown() {
  return (
    <div id="dropdownAvatar" className="z-20 hidden bg-greens-300 divide-y divide-greens-500 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div className="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul className="py-2 text-sm text-gray-700 dark:text-greens-400" aria-labelledby="dropdownUserAvatarButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-greens-300 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div className="py-2">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>
  )
}

export function UserMenu() {
  return (
    <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex text-md bg-greens-400 rounded-full md:me-0 z-20" type="button">
    <span className="sr-only">Open user menu</span>
    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="" />
    </button>
    
  )
}