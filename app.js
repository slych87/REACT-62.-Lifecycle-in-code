class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
    console.log("Wywołać metodę constructor")
  }

  componentWillMount() {
    console.log('Wywołana componentWillMount')
  }

  componentDidMount() {
    console.log('Wywołania componentDidMount')
    this.setState({
      number: 1
    })
  }

  componentDidUpdate() {
    console.log('Wywołana componentDidUpdate')
  }

  render() {
    console.log("Wywołana metoda render")
    return (
      <div>
        <p>
          lifecycle
          </p>
        <Child />
      </div>
    )
  }
}

class Child extends React.Component {
  componentDidMount() {
    console.log(`------------------------------------
    Wywołana componentDidMount w komponencie Child`);
    // this.setState({
    //   number: 1
    // })
  }
  render() {
    return (
      <h1>Dziiecko</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))