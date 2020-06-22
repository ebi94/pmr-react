import React from "react";
import PropTypes from "prop-types";

import {
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

import { MultiLang, Determinator } from "react-multi-language";

const IndexSlider = props => {
  const { idLang } = props;

  const items = [
    {
      src: require("assets/img/slider/beras.jpg"),
      altText: <Determinator>
                {{ 
                  en: 'Rice',
                  id: 'Beras'
                }}
              </Determinator>,
      caption: <Determinator>
                {{ 
                  en: 'Rice',
                  id: 'Beras'
                }}
              </Determinator>
    },
    {
      src: require("assets/img/slider/gula.jpg"),
      altText: <Determinator>
                {{ 
                  en: 'Sugar',
                  id: 'Gula'
                }}
              </Determinator>,
      caption: <Determinator>
                {{ 
                  en: 'Sugar',
                  id: 'Gula'
                }}
              </Determinator>
    },
    {
      src: require("assets/img/slider/minyak-goreng.jpg"),
      altText: <Determinator>
                {{ 
                  en: 'Oil',
                  id: 'Minyak Goreng'
                }}
              </Determinator>,
      caption: <Determinator>
                {{ 
                  en: 'Oil',
                  id: 'Minyak Goreng'
                }}
              </Determinator>
    },
    {
      src: require("assets/img/slider/tepung-terigu.jpg"),
      altText: <Determinator>
                {{ 
                  en: 'Flour',
                  id: 'Tepung Terigu'
                }}
              </Determinator>,
      caption: <Determinator>
                {{ 
                  en: 'Flour',
                  id: 'Tepung Terigu'
                }}
              </Determinator>
    }
  ];
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
        {/* <Row className="justify-content-center"> */}
        <Col md="12" className="box-slider">
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
        <MultiLang lang={idLang} />
        {/* </Row> */}
    </>
  );
}

IndexSlider.defaultProps = {
  idLang: 'en'
};

IndexSlider.propTypes = {
  idLang: PropTypes.string
};

export default IndexSlider;
