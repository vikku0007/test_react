import React from "react";


var placeholder = document.createElement("li");
placeholder.className = "placeholder";

class Tableone extends React.Component {
    constructor(props) {
      super(props);
      this.state = {...props};
    }
    dragStart(e) {
      this.dragged = e.currentTarget;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.dragged);
    }
    dragEnd(e) {
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(placeholder);
      
      // update state
      var data = this.state.tableone;
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
      if(from < to) to--;
      data.splice(to, 0, data.splice(from, 1)[0]);
      this.setState({tableone: data});
    }
    dragOver1(e) {
      e.preventDefault();
      this.dragged.style.display = "none";
      if(e.target.className === 'placeholder') return;
      this.over = e.target;
      e.target.parentNode.insertBefore(placeholder, e.target);
    }
      render() {
      var listItems = this.state.tableone.map((item, i) => {
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
              <ul onDragOver={this.dragOver1.bind(this)} className="bg_yellow">
                    {listItems}
              </ul>
          )
      }
  }

  export default Tableone;