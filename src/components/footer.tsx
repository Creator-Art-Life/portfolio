import React from "react";

function Footer() {
  return (
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2025{" "}
          <a
            href="https://github.com/Creator-Art-Life"
            className="hover:underline"
          >
            Maxim™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  );
}

export default Footer;
