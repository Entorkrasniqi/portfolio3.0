// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-center py-5">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold">
            Entor Krasniqi
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;