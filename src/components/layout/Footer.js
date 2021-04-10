import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              Haswanth Royal
            </span>
            <div display="flex" >
            <i class="fa fa-github fa-3x " aria-hidden="true">
              <a href="https://github.com/Haswanth333"></a>
            </i>
            <i class="fa fa-facebook-square fa-3x"  aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
