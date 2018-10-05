import React, { Component } from 'react';
import { Carousel, Grid, Row, Col, Button } from 'react-bootstrap'
import './carouselComponent.css';



class carouselComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
          index: 0,
          direction: null
        };
      }

      handleSelect(selectedIndex, e) {

        this.setState({
          index: selectedIndex,
          direction: e.direction
        });
      }



    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <div id="carousel_img">

          </div>
          <div className="img_content">
              <Grid>
                  <Row>
                      <Col xs={12} md={3}>
                          <img src="https://m.media-amazon.com/images/M/MV5BOGVhNjUwYTItYmI2NS00ZGI1LWE5ZDQtMWVjMTIyODAzMDI4XkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_.jpg"
                              alt="The Fourth Phase" width={150}></img>
                      </Col>
                      <Col xsHidden md={9}>
                          <Row>
                              <Col md={6} lg={12}>
                                  <h1>The Fourth Phase</h1>
                              </Col>
                          </Row>
                          <Row>
                              <Col md={6} lg={12}>
                                  <p>Experience the world of Red Bull like you have never seen it before.
                                      With the best action sports clips on the web and original series,
                                      prepare for your stoke factor to be at an all time high.</p>
                              </Col>
                          </Row>
                          <Row>
                              <Col md={1}>
                                  <Button bsStyle="primary">Buy Now</Button>
                              </Col>
                              <Col md={1}>
                                  <Button>Watch Trailer</Button>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
              </Grid>
          </div>
        </Carousel.Item>


        <Carousel.Item>
          <div id="carousel_img2"></div>
              <div className="img_content">
                  <Grid>
                      <Row>
                          <Col xs={12} md={3}>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zmYJBkN-K2RwjykPZBZO_rzJVueiZ3pRJRq9vKGFA1x0JH3m"
                                  alt="The Fourth Phase" width={150}></img>
                          </Col>
                          <Col xsHidden md={9}>
                              <Row>
                                  <Col md={6} lg={12}>
                                      <h1>Nichts Passiert</h1>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col md={6} lg={12}>
                                      <p>A man who always avoids conflict violently fights for a
                                          peaceful solution when he cannot achieve harmony.</p>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col md={2}>
                                      <Button bsStyle="primary">Buy Now</Button>
                                  </Col>
                                  <Col md={2}>
                                      <Button>Watch Trailer</Button>
                                  </Col>
                              </Row>
                          </Col>
                      </Row>
                  </Grid>
              </div>
        </Carousel.Item>


        <Carousel.Item>
            <div id="carousel_img3"></div>
            <div className="img_content">
                <Grid>
                    <Row>
                        <Col xs={12} md={3}>
                            <img src="http://www.gstatic.com/tv/thumb/v22vodart/12664790/p12664790_v_v8_af.jpg"
                                alt="Hunt for the Wilderpeople" width={150}></img>
                        </Col>
                        <Col xsHidden md={9}>
                            <Row>
                                <Col md={6} lg={12}>
                                    <h1>Hunt for the Wilderpeople</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} lg={12}>
                                    <p>A boy (Julian Dennison) and his foster father (Sam Neill) become the
                                        subjects of a manhunt after they get stranded in the New Zealand wilderness.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Button bsStyle="primary">Buy Now</Button>
                                </Col>
                                <Col md={2}>
                                    <Button>Watch Trailer</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div id="carousel_img4"></div>
                <div className="img_content">
                    <Grid>
                        <Row>
                            <Col xs={12} md={3}>
                                <img src="https://is3-ssl.mzstatic.com/image/thumb/Video62/v4/35/b9/a2/35b9a22f-6c95-7977-ebda-252245aa4688/pr_source.png/268x0w.png"
                                    alt="Vice Versa" width={150}></img>
                            </Col>
                            <Col xsHidden md={9}>
                                <Row>
                                    <Col md={6} lg={12}>
                                        <h1>Vice Versa</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} lg={12}>
                                        <p>Tom Wallisch and the Good Company crew return with their first full-length film, Vice Versa, featuring world class urban,
                                            park and backcountry skiing, all with their trademark fun style. Come along with the crew as they travel throughout the US,
                                            Japan, BC and Quebec to showcase skiing in the best way possible.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={2}>
                                        <Button bsStyle="primary">Buy Now</Button>
                                    </Col>
                                    <Col md={2}>
                                        <Button>Watch Trailer</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Carousel.Item>
      </Carousel>
        );
    }
}

export default carouselComponent;
