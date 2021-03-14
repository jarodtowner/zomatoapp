import React from 'react';
import './Checkbox.css';

interface CheckboxProps {
  label: string;
  id: string;
  value?: boolean;
  onToggle?: (label: string, value: boolean) => void
}

export default class Checkbox extends React.Component<CheckboxProps> {

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
    if (this.props.onToggle) {
      this.props.onToggle(this.props.label, !this.props.value);
    }
  }

  render(): JSX.Element {
    return (
      <div className="checkbox">
        <input id={this.props.id} type="checkbox" onChange={this.click} checked={this.props.value}></input>
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
  
}
