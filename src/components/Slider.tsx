import React from 'react';
import './Slider.css';

interface SliderProps {
  min: number;
  max: number;
  minLabel: string;
  maxLabel: string;
}

interface SliderState {
  min: number;
  max: number;
}

export default class Slider extends React.Component<SliderProps, SliderState> {
  
  state = {
    min: 0,
    max: 99
  }

  constructor(props: SliderProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="slider">
        <div className="slider__node"></div>
      </div>
    );
  }


}
