import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreCategories } from "./fakestore-categories";
import { FakestoreProducts } from "./fakestore-products";
import { FakestoreDetails } from "./fakestore-details";
import { CustomerLogin } from "./customer-login";
import { FakestoreError } from "./fakestore-error";


export function FakestoreIndex(){
     return(
        <div>
            <BrowserRouter>
                  <header className="d-flex justify-content-between p-4 bg-dark text-white">
                      <div>
                        <span className="fs-4 fw-bold">Fakestore.</span>
                      </div>
                      <div className="fs-5">
                         <Link to="/home" className="link link-light"><span className="mx-2">Home</span></Link>
                         <Link to="/categories" className="link-light"><span className="mx-2">Categories</span></Link>
                         <span className="mx-2">Blog</span>
                         <span className="mx-2">Pages</span>
                      </div>
                      <div className="fs-5">
                        <span className="bi bi-search mx-2"></span>
                        <Link to="/login" className="link-light"><span className="bi bi-person mx-2"></span></Link>
                        <span className="bi bi-cart3 mx-2"></span>
                      </div>
                  </header>
                  <section className="mt-4 p-4">
                     <Routes>
                         <Route path="/" element={<FakestoreHome />} />
                         <Route path="home" element={<FakestoreHome />} />
                         <Route path="categories" element={<FakestoreCategories />} />
                         <Route path="products/:category" element={<FakestoreProducts />}>
                             <Route path="details/:id" element={<FakestoreDetails />} />
                         </Route>
                         <Route path="login" element={<CustomerLogin />} />
                         <Route path="error" element={<FakestoreError />} />
                         <Route path="*" element={<h2 className="text-danger">Not Found</h2>} />
                     </Routes>
                  </section>
            </BrowserRouter>
        </div>
     )
}