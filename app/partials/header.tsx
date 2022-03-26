import { Link } from "remix";

import { useOptionalUser } from "~/utils";

export default function Header() {
  const user = useOptionalUser();

  return (
    <header className="flex justify-between px-16 py-6">
      <span className="font-bold">Spotify Manager</span>
      <nav>
        <ul className="flex items-center space-x-4">
          {user ? (
            <>
              <li>{user.email}</li>
              <li>
              <Link
                  to="/logout"
                  className="flex items-center justify-center px-4 py-3 text-base font-medium text-blue-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-blue-50 sm:px-8"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/join"
                  className="flex items-center justify-center px-4 py-3 text-base font-medium text-blue-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-blue-50 sm:px-8"
                >
                  Sign up
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="flex items-center justify-center px-4 py-3 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 "
                >
                  Log In
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
