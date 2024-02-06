import React from 'react';
import AstaImage from '../assets/asta.jpg';
import '../style/card.css';

export default function Card() {
	return (
		<div className="card">
			<div className="card-container">
				<div className="card-img">
					<img src={AstaImage} alt="" />
				</div>
				<div className="card-main">
					<div className="card-main-titles">
						<h1>Octavian Calin</h1>
						<h3>Full Stack Developer</h3>
						<p>octaviancalin.website</p>
					</div>
					<div className="card-main-btns">
						<button id="btn-email">
							<iconify-icon icon="mdi:email"></iconify-icon>Email
						</button>
						<button id="btn-linkedin">
							<iconify-icon icon="bi:linkedin"></iconify-icon>LinkedIn
						</button>
					</div>
					<div className="card-main-text">
						<div className="card-main-about">
							<h1>About</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
								sunt odio architecto animi numquam necessitatibus ad, quae esse,
								molestiae eius fuga pariatur facere nemo accusantium officia
								explicabo ea, nulla quo.
							</p>
						</div>
						<div className="card-main-interests">
							<h1>Interests</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. At
								repudiandae soluta cumque id magni, aliquid mollitia debitis
								reiciendis temporibus amet earum blanditiis deserunt veritatis
								beatae doloremque eos in voluptates ut!
							</p>
						</div>
					</div>
					<div className="card-footer">
						<iconify-icon icon="fa6-brands:square-twitter"></iconify-icon>
						<iconify-icon icon="fa6-brands:square-facebook"></iconify-icon>
						<iconify-icon icon="fa6-brands:square-instagram"></iconify-icon>
						<iconify-icon icon="fa6-brands:square-github"></iconify-icon>
					</div>
				</div>
			</div>
		</div>
	);
}
