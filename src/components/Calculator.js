import React from 'react';
import './Calculator.css';

/* eslint-disable*/
class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Display />
        <Button value="AC" id="AC" />
        <Button value="+/-" id="sign" />
        <Button value="%" id="modulo" />
        <Button value="&divide;" id="divide" className="operator" />
        <Button value={7} id="seven" />
        <Button value={8} id="eight" />
        <Button value={9} id="nine" />
        <Button value="X" id="X" className="operator" />
        <Button value={4} id="four" />
        <Button value={5} id="five" />
        <Button value={6} id="six" />
        <Button value="-" id="minus" className="operator" />
        <Button value={1} id="one" />
        <Button value={2} id="two" />
        <Button value={3} id="three" />
        <Button value="+" id="plus" className="operator" />
        <Button value={0} id="zero" />
        <Button value="." id="dot" />
        <Button value="=" id="equal" className="operator" />
      </div>
    );
  }
}

const Button = ({ value, id, className }) => (
  <input type="button" value={value} id={id} className={className} />
);

const Display = () => <div className="num-input">0</div>;

export default Calculator;
