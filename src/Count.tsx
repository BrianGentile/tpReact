import * as React from 'react';

interface MyProps {
  initialCount?: number;
}


interface MyState {
  count: number;
}


export default class Count extends React.Component<MyProps,MyState> {
  static defaultProps: MyProps = {
    initialCount: 10
  };


  constructor(props:MyProps) {
    super(props);
    if (props.initialCount !== undefined) {
      this.state= {count: props.initialCount}
    } else {
      this.state= {count: Count.defaultProps.initialCount!}
    }
  }
  increment = () => {
    this.setState({count:this.state.count+1});
  }

  decrement = () => {
      this.setState({count:this.state.count-1});
  };

  render () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        </div>
      )
    }
}