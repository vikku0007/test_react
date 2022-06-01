import React from "react";


var placeholder = document.createElement("li");
placeholder.className = "placeholder";

class Tablethree extends React.Component {
    constructor(props) {
      super(props);
      this.state = {...props};
    }
    dragStart(g) {
      this.dragged = g.currentTarget;
      g.dataTransfer.effectAllowed = 'move';
      g.dataTransfer.setData('text/html', this.dragged);
    }
    dragEnd(g) {
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(placeholder);
      
      // update state
      var data = this.state.tablethree;
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
      if(from < to) to--;
      data.splice(to, 0, data.splice(from, 1)[0]);
      this.setState({tablethree: data});
    }
    dragOver3(g) {
      g.preventDefault();
      this.dragged.style.display = "none";
      if(g.target.className === 'placeholder') return;
      this.over = g.target;
      g.target.parentNode.insertBefore(placeholder, g.target);
    }
      render() {
      var listItems = this.state.tablethree.map((item, i) => {
        return (
          <li 
            data-id={i}
            key={i}
            draggable='true'
            onDragEnd={this.dragEnd.bind(this)}
            onDragStart={this.dragStart.bind(this)} className="bg_blue">{item}</li>
        )
       });
          return (
              <ul onDragOver={this.dragOver3.bind(this)} className="bg_yellow">
                  
                    {listItems}
              </ul>
          )
      }
  }

  export default Tablethree;