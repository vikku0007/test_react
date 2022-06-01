import React from "react";


var placeholder = document.createElement("li");
placeholder.className = "placeholder";

class Tablesix extends React.Component {
    constructor(props) {
      super(props);
      this.state = {...props};
    }
    dragStart(j) {
      this.dragged = j.currentTarget;
      j.dataTransfer.effectAllowed = 'move';
      j.dataTransfer.setData('text/html', this.dragged);
    }
    dragEnd(j) {
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(placeholder);
      
      // update state
      var data = this.state.tablesix;
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
      if(from < to) to--;
      data.splice(to, 0, data.splice(from, 1)[0]);
      this.setState({tablesix: data});
    }
    dragOver6(j) {
      j.preventDefault();
      this.dragged.style.display = "none";
      if(j.target.className === 'placeholder') return;
      this.over = j.target;
      j.target.parentNode.insertBefore(placeholder, j.target);
    }
      render() {
      var listItems = this.state.tablesix.map((item, i) => {
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
              <ul onDragOver={this.dragOver6.bind(this)} className="bg_yellow">
                  
                    {listItems}
              </ul>
          )
      }
  }

  export default Tablesix;