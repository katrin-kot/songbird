import React from "react";

function LevelList(props) {
  const { levels, level } = props;
  const levelItems = levels.map((item, idx) =>
    idx === level ? (
      <li key={idx} className="page-item active-level">
        {item}
      </li>
    ) : (
      <li key={idx} className="page-item">
        {item}
      </li>
    )
  );
  return <ul className="pagination pagination-lg ">{levelItems}</ul>;
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: [
        "Разминка",
        "Зимующие птицы",
        "Перелётные птицы",
        "Водоплавующие птицы",
        "Экзотические птицы",
        "Хищные птицы",
      ],
    };
  }

  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Song<span>bird</span>
          </a>
          <h5 className="score">Score: {this.props.score}</h5>
        </nav>
        <LevelList levels={this.state.levels} level={this.props.level} />
      </header>
    );
  }
}
export default Header;
