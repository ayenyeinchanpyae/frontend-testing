/* eslint-disable */
import React from "react";
//import Cookies from "js-cookie";
//import { useSelector, useDispatch } from "react-redux";

function Navbar({ disableNav }) {
  //const router = useRouter();
  //const dispatch = useDispatch();
  //const loading = useSelector((state) => state.loading);
  const user = "a"; //useSelector((state) => state.user);
  //const shortName = user.first_name || "";
  //const token = Cookies.get("token");
  const token = "abc";
  const logout = () => {
    if (token) {
      //Cookies.remove("token");
      //   dispatch({ type: USER_LOGOUT });
      //   if (router.pathname === "/") {
      //     router.reload();
      //   } else {
      //     router.push("/");
      //   }
    }
  };
  return (
    <>
      {/* <Loading loading={loading} /> */}
      <div className="fixed left-0 top-0 w-full z-10">
        <nav className="flex items-center justify-between bg-white py-4 px-[5rem] flex-wrap">
          {!disableNav && (
            <ul className="inline-flex items-center space-x-5">
              <li>
                <p className="p2-bold-16">Navbar</p>
              </li>
              {!user?._id && (
                <>
                  <p>login</p>
                </>
              )}
              <li>
                {user?._id && (
                  <div className="nav-link nav-link-user">
                    <p>user</p>
                    {/* <div className="relative ml-2 dropdown-user inline-block">
                      <div className="mt-3">
                        <p className="mb-0 mr-2 inline">
                          {user.first_name} {user.last_name}
                        </p>
                        <i className="fas fa-angle-down" />
                      </div>
                      <div className="dropdown-content-user">
                       
                        <div
                          className="sub-dropdown"
                          role="button"
                          onClick={() => router.push("/account/dashboard")}
                          onKeyDown={() => router.push("/account/dashboard")}
                          tabIndex={-1}
                        >
                          <div className="w-[40px] h-[40px] rounded-md flex items-center justify-center icon-hover">
                            <svg
                              width="22"
                              height="21"
                              viewBox="0 0 22 21"
                              fill="none"
                              stroke="#333333"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.02134 17.6084V11.6084C8.02134 11.078 7.80117 10.5693 7.40925 10.1942C7.01734 9.81911 6.48579 9.6084 5.93154 9.6084H3.84175C3.2875 9.6084 2.75595 9.81911 2.36404 10.1942C1.97213 10.5693 1.75195 11.078 1.75195 11.6084V17.6084C1.75195 18.1388 1.97213 18.6475 2.36404 19.0226C2.75595 19.3977 3.2875 19.6084 3.84175 19.6084H5.93154C6.48579 19.6084 7.01734 19.3977 7.40925 19.0226C7.80117 18.6475 8.02134 18.1388 8.02134 17.6084ZM8.02134 17.6084V7.6084C8.02134 7.07797 8.24152 6.56926 8.63343 6.19418C9.02534 5.81911 9.55689 5.6084 10.1111 5.6084H12.2009C12.7552 5.6084 13.2867 5.81911 13.6786 6.19418C14.0706 6.56926 14.2907 7.07797 14.2907 7.6084V17.6084M8.02134 17.6084C8.02134 18.1388 8.24152 18.6475 8.63343 19.0226C9.02534 19.3977 9.55689 19.6084 10.1111 19.6084H12.2009C12.7552 19.6084 13.2867 19.3977 13.6786 19.0226C14.0706 18.6475 14.2907 18.1388 14.2907 17.6084M14.2907 17.6084V3.6084C14.2907 3.07797 14.5109 2.56926 14.9028 2.19418C15.2947 1.81911 15.8263 1.6084 16.3805 1.6084H18.4703C19.0246 1.6084 19.5561 1.81911 19.948 2.19418C20.3399 2.56926 20.5601 3.07797 20.5601 3.6084V17.6084C20.5601 18.1388 20.3399 18.6475 19.948 19.0226C19.5561 19.3977 19.0246 19.6084 18.4703 19.6084H16.3805C15.8263 19.6084 15.2947 19.3977 14.9028 19.0226C14.5109 18.6475 14.2907 18.1388 14.2907 17.6084Z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>

                          <p className="p2-regular-16 ml-4">Dashboard</p>
                        </div>
                        <div
                          className="sub-dropdown border-b-[1px] border-red "
                          role="button"
                          onClick={() => router.push("/account/companyprofile")}
                          onKeyDown={() =>
                            router.push("/account/companyprofile")
                          }
                          tabIndex={-1}
                        >
                          <div className="w-[40px] h-[40px] rounded-md flex items-center justify-center icon-hover">
                            <svg
                              width="22"
                              height="21"
                              viewBox="0 0 22 21"
                              fill="none"
                              stroke="#333333"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.2971 3.88763C6.68256 2.83172 8.35139 2.17165 10.1115 1.9834V11.9284H20.503C20.3063 13.6129 19.6166 15.21 18.5133 16.536C17.41 17.8619 15.9379 18.8627 14.2664 19.4233C12.595 19.9838 10.7921 20.0813 9.06535 19.7045C7.33856 19.3277 5.75803 18.4919 4.50568 17.2934C3.25332 16.0948 2.38003 14.5822 1.98631 12.9296C1.59259 11.277 1.69446 9.55165 2.28017 7.95202C2.86589 6.35239 3.91165 4.94355 5.2971 3.88763Z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14.291 7.92843H20.0254C19.5563 6.66305 18.7981 5.51377 17.8061 4.56437C16.8141 3.61497 15.6132 2.88936 14.291 2.44043V7.92843Z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>

                          <p className="p2-regular-16 ml-4">My Profile</p>
                        </div>

                        <div
                          className="sub-dropdown"
                          role="button"
                          onClick={logout}
                          onKeyDown={logout}
                          tabIndex={-1}
                        >
                          <div className="w-[40px] h-[40px] rounded-md flex items-center justify-center icon-hover">
                            <svg
                              width="21"
                              height="19"
                              viewBox="0 0 21 19"
                              fill="none"
                              stroke="#333333"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.1562 13.6084L19.1562 9.6084M19.1562 9.6084L15.1562 5.6084M19.1562 9.6084H5.15625M11.1562 13.6084V14.6084C11.1562 15.404 10.8402 16.1671 10.2776 16.7297C9.71496 17.2923 8.9519 17.6084 8.15625 17.6084H4.15625C3.3606 17.6084 2.59754 17.2923 2.03493 16.7297C1.47232 16.1671 1.15625 15.404 1.15625 14.6084V4.6084C1.15625 3.81275 1.47232 3.04969 2.03493 2.48708C2.59754 1.92447 3.3606 1.6084 4.15625 1.6084H8.15625C8.9519 1.6084 9.71496 1.92447 10.2776 2.48708C10.8402 3.04969 11.1562 3.81275 11.1562 4.6084V5.6084"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>

                          <p className="p2-regular-16 ml-4">Log out</p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                )}
              </li>
            </ul>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
