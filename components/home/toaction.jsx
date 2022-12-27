import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const To_action = () => {
  const { ref: actionRef, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  useEffect(() => {
    const { Offcanvas } = require("bootstrap");
    const offCanvas = new Offcanvas("#offcanvasScrolling");
    if (inView) {
      offCanvas.show();
    }
  }, [inView]);

  return (
    <section className="to-action" ref={actionRef}>
      <div className="container">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          Enable body scrolling
        </button>
        <div
          className="offcanvas offcanvas-start text-dark"
          data-bs-scroll="true"
          data-bs-backdrop="true"
          tabIndex={-1}
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
              Offcanvas with body scrolling
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <p>
              Try scrolling the rest of the page to see this option in action.
            </p>
          </div>
        </div>

        <section className="grid">
          <aside className="g-col-12 g-col-md-6 g-col-lg-7">
            <article>
              <div className="line"></div>
              <h3 className="title">Lorem ipsum dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="button button-white">
                Lorem
                <span className="d-flex">
                  <img className="flecha" src="./images/path.svg" alt="Arrow" />
                </span>
              </button>
            </article>
          </aside>
          <aside className="g-col-12 g-col-md-5 g-col-lg-5">
            <article>
              <div className="line"></div>
              <h3 className="title">Lorem ipsum</h3>
              <ul className="to-action-list">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </article>
          </aside>
        </section>
      </div>
    </section>
  );
};

export default To_action;
