import "@styles/components/contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container-fluid">
        <section className="grid gap-0">
          <aside className="g-col-12 g-col-sm-6 g-col-lg-5">
            <article className="contact-info">
              <div className="contact-info-wrapper">
                <figure className="icon-form">
                  <img src="./images/icons/icon-form.svg" alt="icon-form" />
                </figure>
                <h2 className="mt-5 mb-3">Contacto</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </article>
          </aside>
          <aside className="g-col-12 g-col-sm-6 g-col-lg-7">
            <form className="contact-form">
              <div className="contact-form-wrapper">
                <div className="wrapper-input">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Jhon Doe"
                    required
                  />
                  <label htmlFor="">Nombre</label>
                </div>
                <div className="wrapper-input">
                  <input
                    className="form-input"
                    type="email"
                    placeholder="example@mail.com"
                    required
                  />
                  <label htmlFor="">Email</label>
                </div>
                <div className="wrapper-input">
                  <textarea required rows="5" className="form-input"></textarea>
                  <label htmlFor="">Mensaje</label>
                </div>
                <div className="wrapper-input"></div>
                <button className="button button-red">
                  Enviar
                  <span>
                    <img src="/images/icons/enviar.svg" alt="icon-send" />
                  </span>
                </button>
              </div>
            </form>
          </aside>
        </section>
      </div>
    </section>
  );
};

export default Contact;
