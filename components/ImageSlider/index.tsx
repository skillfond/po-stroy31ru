import classNames from "classnames"
import React from "react"
import Slider from "react-slick"
import Image from "next/image"

interface ISliderProps {
	className?: any
	images: string[]
}

const WebsiteSlider: React.FC<ISliderProps> = ({ className, images }) => {
	const settings = {
		centerMode: true,
		centerPadding: "5px",
		dots: true,
		adaptiveHeight: true,
		accessibility: true,
		infinite: true,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
	}

	return (
		<div>
			<Slider {...settings} className={classNames(className, "websiteSlider")}>
				{images.slice(1).map((items) => (
					<div key={items}>
						<Image
							src={items}
							alt='image'
							width={800}
							height={543}
							objectFit='cover'
							quality={50}
							loading='lazy'
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default WebsiteSlider
