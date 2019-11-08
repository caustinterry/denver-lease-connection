import React from 'react';
import './style.css';

const index = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
                <a className="navbar-brand text-warning" href="#">Denver Lease Connection</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active text-primary" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link text-primary" href="#">Listings</a>
                        <a className="nav-item nav-link text-primary" href="#">Applicants</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default index;