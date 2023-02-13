import React, {Component, useState} from 'react';


const FunctionComponentClicker = () => {
    const [clicker, setClicker] = useState(0)
    return (
        <div className="clicker">
            <h1>{clicker}</h1>
            <br/>
            <button className="clicker_button" onClick={() => setClicker(clicker + 1)}>Clicker</button>
        </div>
    )
}

class ClassComponentColorChange extends Component<any> {
    state = {
        color: 'black'
    }

    changeColor = (textColor: string) => {
        this.setState({color: textColor})
    }

    render() {
        const {color} = this.state
        return (
            <div className="changeTextColor">
                <h1 style={{color: color}}>Test Color</h1>
                <div>
                    <button onClick={() => this.changeColor('red')}>red</button>
                    <button onClick={() => this.changeColor('blue')}>blue</button>
                </div>
            </div>
        )
    }
}

function App() {
  return (
      <>
        <FunctionComponentClicker />
          <ClassComponentColorChange />
      </>
  );
}

export default App;
