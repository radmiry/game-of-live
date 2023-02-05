import React from 'react';
import { IBoardProps } from './board';
import { Cell } from '../cell/cell';

type State = {
  grid: Array<Array<boolean>>;
};

export class BoardC extends React.Component<IBoardProps, State> {
  constructor(props: IBoardProps) {
    super(props);
    this.state = { grid: [[false]] };
  }

  componentDidMount() {
    const rows = [];
    if (this.props.random) {
      for (let i = 0; i < this.props.numRows; i++) {
        rows.push(
          Array.from(Array(this.props.numCols), () => Math.random() > 0.7)
        );
      }
    } else {
      for (let i = 0; i < this.props.numRows; i++) {
        rows.push(Array.from(Array(this.props.numCols), () => i % 2 === 0));
      }
    }
    this.setState({ grid: rows });
  }

  shouldComponentUpdate(
    nextProps: Readonly<IBoardProps>,
    nextState: Readonly<State>,
    nextContext: any
  ): boolean {
    return JSON.stringify(this.props) !== JSON.stringify(nextProps);
  }

  render() {
    console.log(this.props.numCols, this.props.numRows);
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${this.props.numCols}, 20px)`,
          width: 'fit-content',
          margin: '0 auto',
          background: '#042940'
        }}
      >
        {this.state.grid.map((rows, i) =>
          rows.map((colum, j) => (
            <Cell key={`${i} ${j}`} isAlive={this.state.grid[i][j]} />
          ))
        )}
      </div>
    );
  }
}
