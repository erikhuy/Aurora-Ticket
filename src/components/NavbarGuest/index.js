import React, { Component } from "react";
import "./css/style-navbar.css";

export default class NavbarGuest extends Component {
  render() {
    return (
      <div>
        {/* ============ Nav Bar =========== */}

        <div>
          <header className="header">
            <div className="header__content d-flex">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">
                  <img
                    className="webLogo"
                    src="/img/logo-aurora.png"
                    alt="webLogo"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <h1 className="brand-name">Aurora Ticket</h1>
                </div>
                <div className="log-in">
                  <a href="#">
                    <i class="fas fa-angle-right mr-2"></i>
                    <span>Đăng nhập</span>
                  </a>
                </div>
                <div className="dropdown address">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-white text-dark address__drop"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-location-arrow mr-2"></i>
                    <a href />
                    Hồ Chí Minh
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Hồ Chí Minh
                    </a>
                    <a className="dropdown-item" href="#">
                      Hà Nội
                    </a>
                    <a className="dropdown-item" href="#">
                      Đà Nẵng
                    </a>
                    <a className="dropdown-item" href="#">
                      Hải Phòng
                    </a>
                    <a className="dropdown-item" href="#">
                      Biên Hòa
                    </a>
                    <a className="dropdown-item" href="#">
                      Nha Trang
                    </a>
                    <a className="dropdown-item" href="#">
                      Bình Dương
                    </a>
                    <a className="dropdown-item" href="#">
                      Phan Thiết
                    </a>
                    <a className="dropdown-item" href="#">
                      Hạ Long
                    </a>
                    <a className="dropdown-item" href="#">
                      Cần Thơ
                    </a>
                    <a className="dropdown-item" href="#">
                      Vũng Tàu
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </header>
        </div>

        {/* End Navbar */}
      </div>
    );
  }
}
