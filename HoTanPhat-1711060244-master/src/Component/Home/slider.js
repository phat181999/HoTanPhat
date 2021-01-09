import React from 'react';
import Flip from 'react-reveal/Flip';

export default function Slider() {
	return (
		<section id="slider">
			<div id="carouselId" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselId" data-slide-to={0} className="active" />
					<li data-target="#carouselId" data-slide-to={1} />
					<li data-target="#carouselId" data-slide-to={2} />
				</ol>
				<div className="carousel-inner" role="listbox">
					<Flip left>
					<div className="carousel-item active">
						<img src="./img/1.png" alt="First slide" className="img" />
					</div>
					</Flip>
					<Flip left>
					<div className="carousel-item">
						<img src="./img/2.jpg" alt="Second slide" className="img" />
					</div>
					</Flip>
					<Flip left>
					<div className="carousel-item">
						<img src="./img/3.jpg" alt="Third slide" className="img" />
					</div>
					</Flip>
				</div>
				<a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</section>
	);
}
