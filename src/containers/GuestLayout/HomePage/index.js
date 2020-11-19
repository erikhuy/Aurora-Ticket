import React, { Component } from "react";
import "./css/style.css";

export default class HomePage extends Component {
  render() {
    console.log("homepage is loaded");
    return (
      <div className="">
        {/* ========== 1- COMPONENT Hero Header ========== */}
        <section class="hero">
          <header class="hero-header">
            <h1 class="hero-title mb-5">One place. All movies.</h1>
            <div class="hero-content">
              <form>
                <div class="inner-form">
                  <div class="input-field first-wrap">
                    <div class="svg-wrapper"></div>
                    <input
                      id="search"
                      type="text"
                      placeholder="Search a movie"
                    />
                  </div>
                  <div class="input-field second-wrap">
                    <button class="btn-search" type="button">
                      SEARCH
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </header>
        </section>
        {/* ========== End COMPONENT Hero Header ========== */}

        {/* ========== 2- COMPONENT Carousel ========== */}
        <div className="now-playing">
          <div className="container my-4">
            <h3>Now Playing</h3>
            {/*Carousel Wrapper*/}
            <div
              id="multi-item-example"
              className="carousel slide carousel-multi-item"
              data-ride="carousel"
            >
              {/*Controls*/}
              <div className="controls-top">
                <a
                  className="btn-floating"
                  href="#multi-item-example"
                  data-slide="prev"
                >
                  <i className="fa fa-chevron-left" />
                </a>
                <a
                  className="btn-floating"
                  href="#multi-item-example"
                  data-slide="next"
                >
                  <i className="fa fa-chevron-right" />
                </a>
              </div>
              {/*/.Controls*/}
              {/*Indicators*/}
              <ol className="carousel-indicators">
                <li
                  data-target="#multi-item-example"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#multi-item-example" data-slide-to={1} />
                <li data-target="#multi-item-example" data-slide-to={2} />
              </ol>
              {/*/.Indicators*/}
              {/*Slides*/}
              <div className="carousel-inner" role="listbox">
                {/*First slide*/}
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mb-2">
                        <img
                          className="card-img-top"
                          src="https://www.joblo.com/assets/images/joblo/posters/2020/10/rayalastdragonposter1joblo_thumb.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <a className="btn btn-primary">Trailer</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img
                          className="card-img-top"
                          src="https://www.joblo.com/assets/images/joblo/posters/2020/07/radioactive-poster_thumb.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img
                          className="card-img-top"
                          src="https://www.joblo.com/assets/images/joblo/posters/2019/08/The-Kill-Team-poster_thumb.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.First slide*/}
                {/*Second slide*/}
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mb-2">
                        <img
                          className="card-img-top"
                          src="https://www.joblo.com/assets/images/joblo/posters/2019/10/litlejoeposter913_thumb.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img
                          className="card-img-top"
                          src="https://www.joblo.com/assets/images/joblo/posters/2020/10/memories-murder-review-poster_thumb.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <a className="btn btn-primary">Trailer</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img
                          className="card-img-top"
                          src="https://www.joblo.com/assets/images/joblo/posters/2020/01/emma-poster_thumb.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.Second slide*/}
                {/*Third slide*/}
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mb-2">
                        <img
                          className="card-img-top"
                          src="https://www.joblo.com/assets/images/joblo/posters/2020/02/black_widow_ver8_xlg_thumb.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img
                          className="card-img-top"
                          src="https://www.joblo.com/assets/images/joblo/posters/2020/05/The_King_of_Staten_Island_thumb.jpeg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img
                          className="card-img-top"
                          src="https://www.joblo.com/assets/images/joblo/posters/2020/01/timmy-failure-poster_thumb.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.Third slide*/}
              </div>
              {/*/.Slides*/}
            </div>
            {/*/.Carousel Wrapper*/}
          </div>
        </div>
        {/* ========== End COMPONENT Carousel ========== */}

        <h1>content</h1>
        <h1>content</h1>
        <h1>content</h1>
      </div>
    );
  }
}
