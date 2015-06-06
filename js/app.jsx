var App = React.createClass({
  getInitialState: function(){
    return { };
  },

  render: function() {
    return (<Home />);
  }
});

var Home = React.createClass({

    render: function() {
    return (
      
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div className="post-preview">
                    <a href="post.html">
                        <h2 className="post-title">
                            Man must explore, and this is exploration at its greatest
                        </h2>
                        <h3 className="post-subtitle">
                            Problems look mighty small from 150 miles up
                        </h3>
                    </a>
                    <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>
                </div>
                <hr></hr>
                <div className="post-preview">
                    <a href="post.html">
                        <h2 className="post-title">
                            I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
                        </h2>
                    </a>
                    <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 18, 2014</p>
                </div>
                <hr></hr>
                <div className="post-preview">
                    <a href="post.html">
                        <h2 className="post-title">
                            Science has not yet mastered prophecy
                        </h2>
                        <h3 className="post-subtitle">
                            We predict too much for the next year and yet far too little for the next ten.
                        </h3>
                    </a>
                    <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on August 24, 2014</p>
                </div>
                <hr></hr>
                <div className="post-preview">
                    <a href="post.html">
                        <h2 className="post-title">
                            Failure is not an option
                        </h2>
                        <h3 className="post-subtitle">
                            Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                        </h3>
                    </a>
                    <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on July 8, 2014</p>
                </div>
                <hr></hr>
               
                <ul className="pager">
                    <li className="next">
                        <a href="#">Older Posts &rarr;</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
});

var Nav = React.createClass({

    goHome: function(){
debugger
React.render(
  <About />,
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
                        <a href="about.html">About</a>
                    </li>
                    <li>
                        <a href="post.html">Projects</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            
        </div>
       
    </nav>

     );
  }
});

var About = React.createClass({

 render: function() {
    return (
      
 <div className="container">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae debitis nobis, quod sapiente qui voluptatum, placeat magni repudiandae accusantium fugit quas labore non rerum possimus, corrupti enim modi! Et.</p>
            </div>
        </div>
 </div>


     );
  }
});

React.render(
  <Nav />,
  document.getElementById("main_nav")
);

React.render(
  <App />,
  document.getElementById("main_content")
);

