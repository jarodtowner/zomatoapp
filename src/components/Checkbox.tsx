import React from 'react';
import './Checkbox.css';

interface CheckboxProps {
  label: string;
  id: string;
  value?: boolean;
  onToggle?: (label: string, value: boolean) => void
}

interface CheckboxState {
  value: boolean;
}

export default class Checkbox extends React.Component<CheckboxProps, CheckboxState> {

  state = {
    value: false
  }

  constructor(props: CheckboxProps) {
    super(props);
    if (this.props.value) {
      this.state = {
        value: this.props.value
      };
    }
    this.click = this.click.bind(this);
  }

  click(): void {
    this.setState({ value: !this.state.value }, () => {
      if (this.props.onToggle) {
        this.props.onToggle(this.props.label, this.state.value);
      }
    });
  }

  render(): JSX.Element {
    return (
      <div className="checkbox">
        <input id={this.props.id} type="checkbox" onChange={this.click} checked={this.state.value}></input>
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
  
}
