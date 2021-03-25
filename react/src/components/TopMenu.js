import React from 'react'
import { Link } from "react-router-dom";

import '../styles/top-menu.scss';

import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Email } from '../images/icon-email.svg';
import { ReactComponent as Instagram } from '../images/icon-instagram.svg';
import { ReactComponent as Whatsapp } from '../images/icon-whatsapp.svg';

function TopMenu() {
	return (
		<>
			<nav className="top-menu">
				<div className="container container-big">
					<div className="row">
						<div className="col-12">
					
							<Link to="/" className="logo">
								<Logo />
							</Link>

							<button id="open-fs">
								<span></span>
								<span></span>
								<span></span>
							</button>

							<ul className="right-menu">

								<li>
									<Link to="#home" className="title-small">
										Home
									</Link>
								</li>

								<li className="sep">
									<p className="title-small">/</p>
								</li>

								<li>
									<Link to="#about" className="title-small">
										About
									</Link>
								</li>

								<li className="sep">
									<p className="title-small">/</p>
								</li>

								<li>
									<Link to="#services" className="title-small">
										Services
									</Link>
								</li>

								<li className="sep">
									<p className="title-small">/</p>
								</li>

								<li>
									<Link to="#plans" className="title-small">
										Plans
									</Link>
								</li>

								<li className="sep">
									<p className="title-small">/</p>
								</li>

								<li>
									<Link to="#contact" className="title-small">
										Contact
									</Link>
								</li>

								<span className="social">

									<li>
										<Link to="mailto:info@lepimentafit.com">
											<Email className="svg-icon" />
										</Link>
									</li>

									<li>
										<Link to="https://api.whatsapp.com/send?phone=353830523302">
											<Whatsapp className="svg-icon" />
										</Link>
									</li>

									<li>
										<Link to="https://www.instagram.com/lepimentafit/" target="_blank">
											<Instagram className="svg-icon" />
										</Link>
									</li>

								</span>

							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default TopMenu