import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Created by{" "}
        <a className="footer--name" href="https://github.com/yyassin1">
          Yassin Yassin
        </a>
      </p>
      <p className="footer--copyright">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  );
}
