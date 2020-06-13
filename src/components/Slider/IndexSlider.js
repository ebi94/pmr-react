import React from "react";

// reactstrap components
import {
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/slider/beras.jpg"),
    altText: "Beras",
    caption: "Beras"
  },
  {
    src: require("assets/img/slider/gula.jpg"),
    altText: "Gula",
    caption: "Gula"
  },
  {
    src: require("assets/img/slider/minyak-goreng.jpg"),
    altText: "Minyak Goreng",
    caption: "Minyak Goreng"
  },
  {
    src: require("assets/img/slider/tepung-terigu.jpg"),
    altText: "Tepung Terigu",
    caption: "Tepung Terigu"
  }
];

function IndexSlider() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
        <Row className="justify-content-center">
        <Col md="12">
            <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {items.map(item => {
                return (
                <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.src}
                    className="custom-item-carousel"
                >
                    <img src={item.src} alt={item.altText} />
                    <div className="carousel-caption d-none d-md-block">
                    <h5>{item.caption}</h5>
                    </div>
                </CarouselItem>
                );
            })}
            <a
                className="carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={e => {
                e.preventDefault();
                previous();
                }}
                role="button"
            >
                <i className="now-ui-icons arrows-1_minimal-left"></i>
            </a>
            <a
                className="carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={e => {
                e.preventDefault();
                next();
                }}
                role="button"
            >
                <i className="now-ui-icons arrows-1_minimal-right"></i>
            </a>
            </Carousel>
        </Col>
        </Row>
    </>
  );
}

export default IndexSlider;
