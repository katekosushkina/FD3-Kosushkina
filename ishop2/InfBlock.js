var InfBlock = React.createClass({

  displayName: 'InfBlock',

  propTypes: {
    head: React.PropTypes.string.isRequired,
    list: React.PropTypes.array.isRequired,
  },

  color: function(){
    this.setState({}, ( {className:'Selected'}));
    // не меняется className
  },

  deleted: function(code){
    console.log('выбран ответ с кодом '+code);
    // выводит в консоль 
  },

  render: function() {

    let tHead=[
      React.DOM.tr({className:'tHead'},
      React.DOM.th({className:'Name'},"Имя"),
      React.DOM.th({className:'Price'},"Цена"),
      React.DOM.th({className:'Img'},"Картинка"),
      React.DOM.th({className:'Count'},"Колличество"),
      React.DOM.th({className:'Control'},"Удалить")),
    ];

    let ListCode=this.props.list.map( v =>
        React.DOM.tr({key:v.code,className:'Item',onClick:this.color},
          React.DOM.td({className:'Name'},v.name),
          React.DOM.td({className:'Price'},v.price),
          React.DOM.td({},React.DOM.img({className:'Img', src:v.url, alt:'img'})),
          React.DOM.td({className:'Count'},v.count),
          React.DOM.td({},React.DOM.input({className:'Control',type:'button', value: "Delete",onClick:this.deleted(v.code)})),
        )
      );
    return React.DOM.table( {className:'ListBlock'},
      React.DOM.caption( {className:'Header'}, this.props.head),
      React.DOM.thead( {className:'THead'}, tHead ),
      React.DOM.tbody( {className:'Items'}, ListCode ),
    );
  },

  handleClick: function(event) {
    const domNode = ReactDOM.findDOMNode(this);
    console.log(domNode);
  }
  
  
});