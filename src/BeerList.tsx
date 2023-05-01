import * as React from 'react';

interface MyProps {
    initialList?: Array<string>;
  }
  
  
  interface MyState {
    beers: Array<string>;
    inputAddValue: string;
    inputRemoveValue: string;

  }

  export default class BeerList extends React.Component<MyProps,MyState> {
  
    
    constructor(props:MyProps) {
      super(props);
      if (props.initialList !== undefined) {
        this.state= {beers: props.initialList, inputAddValue:'',inputRemoveValue:''}
      } else {
        this.state= {beers:[], inputAddValue:'',inputRemoveValue:'' }
      }
      const myRef = React.createRef();
    }

    
    add = () => {
      const s =  this.state.beers;
      const value = this.state.inputAddValue;
      this.setState({beers: s.concat([value]), inputAddValue: ''});
    }


    remove= () => {
      var array = this.state.beers;
      var index = array.indexOf(this.state.inputRemoveValue);
      if (index !== -1) {
        array.splice(index, 1); // supprimer la bière de la liste
        this.setState({beers: array, inputRemoveValue: ''}); // mettre à jour l'état avec la nouvelle liste de bières et une chaîne vide pour l'entrée d'input
      }
    }


    
    render(): React.ReactNode {
      return (
        <div>            
           <ul>
           {this.state.beers.map((beer) => {
             return <li>{beer}</li>
           })}

           </ul>

          <input type="text" id="add" name="add" value={this.state.inputAddValue} onChange={(e) => this.setState({inputAddValue: e.target.value})}></input>
          <button onClick={this.add}>Add beer</button>

          <br/>
          <br/>

          <input type="text" id="remove" name="remove" value={this.state.inputRemoveValue} onChange={(e) => this.setState({inputRemoveValue: e.target.value})}></input>
          <button onClick={this.remove}>Remove beer</button>
          
        </div>
        )
    }
  };