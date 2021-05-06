import React from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators} from 'reactstrap';
import img1 from './rotaract1.jpeg';
import img2 from './rotaract2.jpeg';
import img3 from './rotaract3.jpeg';
import img4 from './rotaract4.jpeg';
import img5 from './rotaract5.jpeg';

const items = [
    {
        src:img5,
        key:1
      },
      {
        src:img2,
        key:2
      },
      {
        src: img3,
        key:3
      },
      {
        src: img4,
        key:4
      },
      {
        src: img1,
        key:5
      }
 ]


export default class InfoCarousel extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            activeIndex: 0,
            animating: false
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
    }

    componentWillMount(){

    }

    next = () =>{
        if(this.state.animating){
            return;
        }
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }

    previous = () =>{
        if(this.state.animating){
            return;
        }

        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    }

    goToIndex = (newIndex) =>{
        if(this.state.animating){
            return;
        }
        this.setState({activeIndex: newIndex});
    }

    slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => this.setState({animating: true})}
            onExited={() => this.setState({animating: false})}
            key={item.key}
            style={{maxHeight:'20vh !important'}}
          >
            <img src={item.src} alt={item.altText} style={{opacity:'0.3', maxHeight:'95vh', width:'100%', height:'95vh'}}/>
          </CarouselItem>
        );
      });

    render(){
        return(
            <Carousel
                activeIndex={this.state.activeIndex}
                next={this.next}
                previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
            {this.slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        )
    }
  }