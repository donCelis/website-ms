const To_action = () => {
  return (
    <section className="to-action">
      <div className="container">
        <section className="row justify-content-between gx-5 gy-5 gy-lg-0">
          <aside className="col-12 col-md-6 col-lg-7">
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
          <aside className="col-12 col-md-5 col-lg-5">
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
