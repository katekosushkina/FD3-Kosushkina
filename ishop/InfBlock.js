var InfBlock = React.createClass({

  displayName: 'InfBlock',

  propTypes: {
    head: React.PropTypes.string.isRequired,
    list: React.PropTypes.array.isRequired,
  },

  render: function() {
    let tHead=[
      React.DOM.tr({className:'tHead'},
      React.DOM.th({className:'Name'},"Имя"),
      React.DOM.th({className:'Price'},"Цена"),
      React.DOM.th({className:'Img'},"Картинка"),
      React.DOM.th({className:'Count'},"Колличество"))
    ];

    let ListCode=this.props.list.map( v =>
        React.DOM.tr({key:v.code,className:'Item'},
          React.DOM.td({className:'Name'},v.name),
          React.DOM.td({className:'Price'},v.price),
          React.DOM.td({},React.DOM.img({className:'Img', src:v.url, alt:'img'})),
          React.DOM.td({className:'Count'},v.count),
        )
      );
    return React.DOM.table( {className:'ListBlock'}, 
      React.DOM.caption( {className:'Header'}, this.props.head),
      React.DOM.thead( {className:'THead'}, tHead ),
      React.DOM.tbody( {className:'Items'}, ListCode ),
    );
  },

});