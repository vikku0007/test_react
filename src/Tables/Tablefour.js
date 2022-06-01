import React from "react";


var placeholder = document.createElement("li");
placeholder.className = "placeholder";

class Tablefour extends React.Component {
    constructor(props) {
      super(props);
      this.state = {...props};
    }
    dragStart(h) {
      this.dragged = h.currentTarget;
      h.dataTransfer.effectAllowed = 'move';
      h.dataTransfer.setData('text/html', this.dragged);
    }
    dragEnd(h) {
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(placeholder);
      
      // update state
      var data = this.state.tablefour;
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
      if(from < to) to--;
      data.splice(to, 0, data.splice(from, 1)[0]);
      this.setState({tablefour: data});
    }
    dragOver4(h) {
      h.preventDefault();
      this.dragged.style.display = "none";
      if(h.target.className === 'placeholder') return;
      this.over = h.target;
      h.target.parentNode.insertBefore(placeholder, h.target);
    }
      render() {
      var listItems = this.state.tablefour.map((item, i) => {
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
              <ul onDragOver={this.dragOver4.bind(this)} className="bg_yellow">
                  
                    {listItems}
              </ul>
          )
      }
  }

  export default Tablefour;