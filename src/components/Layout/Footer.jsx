const Footer = () => {
  const today = new Date().getFullYear();

  return (
    <footer className="footer mt-5 py-1 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <p className="my-3 fs-5 fw-lighter text-center text-muted">
              <span>&copy;Copyright {today}</span>&ensp;Team Member Allocation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
