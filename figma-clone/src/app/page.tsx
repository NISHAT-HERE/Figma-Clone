import Hero from "./components/hero";
import RecentPost from "./components/recentPost";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <Hero />
      <RecentPost />
    </div>
    <div className="featured-section">
    <div className="container">
      <div className="main">
      <div className="main-heading">
        <h2>Featured Works</h2>
      </div>
      <div className="card">
      <img src="/assets/Rectangle 30.png" width={350} height={180} className="space-y-44 flex flex-col items-center justify-center" alt="image"/>

      <div className="card-content">
                                <h2>Designing Dashboards</h2>
                                <div className="badge-parent">
                                    <div className="badge">
                                        <p>2020</p>
                                    </div>
                                    <p>Dashboard</p>
                                </div>
                                <p>
                                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                  amet sint. Velit officia consequat duis enim velit mollit.
                                  Exercitation veniam consequat sunt nostrud amet.
                                </p>
                              </div>
                      </div>

                    <div className="card">
                      <img
                        src="/assets/Rectangle 32.png"
                        width={350}
                        height={180}
                        alt="image"
                      ></img>

                      <div className="card-content">
                        <h2>Designing Dashboards</h2>
                        <div className="badge-parent">
                            <div className="badge">
                                <p>2020</p>
                            </div>
                            <p>Dashboard</p>
                        </div>
                        <p>
                          Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                          amet sint. Velit officia consequat duis enim velit mollit.
                          Exercitation veniam consequat sunt nostrud amet.
                        </p>
                      </div>
                    </div>

                    <div className="card">
                      <img
                        src="/assets/Rectangle 34.png"
                        width={350}
                        height={180}
                        alt="image"
                      ></img>

                      <div className="card-content">
                        <h2>Designing Dashboards</h2>
                        <div className="badge-parent">
                            <div className="badge">
                                <p>2020</p>
                            </div>
                            <p>Dashboard</p>
                        </div>
                        <p>
                          Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                          amet sint. Velit officia consequat duis enim velit mollit.
                          Exercitation veniam consequat sunt nostrud amet.
                        </p>
                      </div>
                    </div>
            </div>


      </div>
      </div>
    </>
  );
}
