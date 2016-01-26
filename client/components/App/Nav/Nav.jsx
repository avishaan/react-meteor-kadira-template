Nav = React.createClass({
  render() {
    return (
      <ul className="nav nav-pills nav-stacked">
        <li><a href="/">Dashboard</a></li>
        <li><a href="/new-ninja"> New Ninja</a></li>
        <li><a href="/ninjas"> List Ninjas</a></li>
      </ul>
    );
  }
});
