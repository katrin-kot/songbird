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
      score: 0,
      levels: [
        "Разминка",
        "Воробьиные",
        "Лесные птицы",
        "Певчие птицы",
        "Хищные птицы",
        "Морские птицы",
      ],
      activeLevel: 0,
    };
  }

  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Song<span>bird</span>
          </a>
          <p className="score">Score:{this.state.score}</p>
        </nav>
        <LevelList levels={this.state.levels} level ={this.state.activeLevel} />
      </header>
    );
  }
}
export default Header;
