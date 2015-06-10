var App = React.createClass({

  getInitialState: function(){
    return { };
  },

  render: function() {
    return (<Home />);
  }
});

React.render(
  <App />,
  document.getElementById("main_content")
);
