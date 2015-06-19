var Nav = React.createClass({

    goHome: function(){
      React.render(
        <Home />,
        document.getElementById("main_content")
      );
    },
    goAbout: function(){
      React.render(
        <About />,
        document.getElementById("main_content")
      );
    },
    goProjects: function(){

    },
    goContact: function(){
      React.render(
        <Contact />,
        document.getElementById("main_content")
      );
    },
    render: function() {
      return (

        <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
          <div className="container-fluid">
              <div className="navbar-header page-scroll">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="/">Sergey Kozachenko aka Grievoushead</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                      <li>
                          <a href="#/home" onClick={this.goHome}>Home</a>
                      </li>
                      <li>
                          <a href="#/about" onClick={this.goAbout}>About</a>
                      </li>
                      <li>
                          <a href="#/projects" onClick={this.goProjects}>Projects</a>
                      </li>
                      <li>
                          <a href="#/contact" onClick={this.goContact}>Contact</a>
                      </li>
                      <li>
                          <a href="//grievoushead.github.io/video-calls/">Video Call</a>
                      </li>
                      <li>
                          <a href="//grievoushead.github.io/fire-chat/">Chat</a>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>

       );
    }
});

React.render(
  <Nav />,
  document.getElementById("main_nav")
);
