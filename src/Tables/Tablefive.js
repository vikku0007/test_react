import React from "react";


var placeholder = document.createElement("li");
placeholder.className = "placeholder";

class Tablefive extends React.Component {
    constructor(props) {
      super(props);
      this.state = {...props};
    }
    dragStart(i) {
      this.dragged = i.currentTarget;
      i.dataTransfer.effectAllowed = 'move';
      i.dataTransfer.setData('text/html', this.dragged);
    }
    dragEnd(i) {
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(placeholder);
      
      // update state
      var data = this.state.tablefive;
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
      if(from < to) to--;
      data.splice(to, 0, data.splice(from, 1)[0]);
      this.setState({tablefive: data});
    }
    dragOver5(i) {
      i.preventDefault();
      this.dragged.style.display = "none";
      if(i.target.className === 'placeholder') return;
      this.over = i.target;
      i.target.parentNode.insertBefore(placeholder, i.target);
    }
      render() {
      var listItems = this.state.tablefive.map((item, i) => {
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
              <ul onDragOver={this.dragOver5.bind(this)} className="bg_yellow">
                  
                    {listItems}
              </ul>
          )
      }
  }

  export default Tablefive;