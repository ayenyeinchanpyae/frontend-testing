import React from "react";
import PropTypes from "prop-types";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

export default function Layout({ children }) {
  //const router = useRouter();
  // specified route to enfocre login
  //const PathName = ["/account/questions"];
  //const isComplete = PathName.includes(router.pathname);
  return (
    <div>
      <Navbar />
      <main className="mt-20">{children}</main>
      <Footer />
    </div>
  );
}
