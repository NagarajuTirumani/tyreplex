import React from "react";

function Footer() {
  return (
    <div>
      <div className="p-4 border shadow rounded askQuestions">
        <div className="row">
          <div className="col-md-6 col-9">
            <h6 className="fw-bold mb-1">Have a question about Tyres?</h6>
            <p className="mt-2 text-muted mb-2">
              Get an answer in 24 hours from our experts.
            </p>
            <div className="col-sm-12">
              <form action="submit" className="col-sm-12">
                <input
                  type="text"
                  placeholder="Ask or Search your question"
                  className="col-sm-10 py-2 px-4 bg-white askQuestions_input"
                />
              </form>
            </div>
          </div>
          <div className="col-md-4 col-3 d-flex align-items-center justify-content-sm-end">
            <img
              src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60"
              className="img-fluid image-section"
              alt="theme"
              width="50"
              height="100"
            />
          </div>
        </div>
      </div>

      <footer className="bg-white">
        <div className="row d-flex p-3 py-4 justify-content-between">
          <div className="col-md-2 text-center">
            <img
              width="92"
              height="22"
              alt="TyrePlx"
              className="cursor-pointer"
              src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&v=512"
            />
            <div className="m-2 align-items-center">
              <i className="mx-2 fa-brands fa-facebook-f cursor-pointer"></i>
              <i className="mx-2 fa-brands fa-instagram cursor-pointer"></i>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-sm-4 d-flex flex-column">
                <span className="text-muted cursor-pointer link-text">
                  Who are We?
                </span>
                <span className="text-muted cursor-pointer link-text">
                  Are you a Tyre Dealer?
                </span>
              </div>
              <div className="col-sm-4 d-flex flex-column">
                <span className="text-muted cursor-pointer link-text">
                  Privacy Policy
                </span>
                <span className="text-muted cursor-pointer link-text">
                  Terms of Use
                </span>
              </div>
              <div className="col-sm-4 d-flex flex-column">
                <span className="text-muted cursor-pointer link-text">
                  Contact Us
                </span>
                <span className="text-muted cursor-pointer link-text">Career</span>
                <span className="text-muted cursor-pointer link-text">
                  Shipping & Return Policy
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top text-center p-1">
          <span className="text-muted">
            ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights
            Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
