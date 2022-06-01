import React from "react";


var placeholder = document.createElement("li");
placeholder.className = "placeholder";

class Tabletwo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {...props};
    }
    dragStart(f) {
      this.dragged = f.currentTarget;
      f.dataTransfer.effectAllowed = 'move';
      f.dataTransfer.setData('text/html', this.dragged);
    }
    dragEnd(f) {
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(placeholder);
      
      // update state
      var data = this.state.tabletwo;
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
      if(from < to) to--;
      data.splice(to, 0, data.splice(from, 1)[0]);
      this.setState({tabletwo: data});
    }
    dragOver2(f) {
      f.preventDefault();
      this.dragged.style.display = "none";
      if(f.target.className === 'placeholder') return;
      this.over = f.target;
      f.target.parentNode.insertBefore(placeholder, f.target);
    }
      render() {
      var listItems = this.state.tabletwo.map((item, i) => {
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
              <ul onDragOver={this.dragOver2.bind(this)} className="bg_yellow">
                  
                    {listItems}
              </ul>
          )
      }
  }

  export default Tabletwo;