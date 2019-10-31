import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    const imageUrl =
      "https://cdn.aprico-media.com/production/imgs/images/000/009/645/original.jpg?1515118805";
    return (
      <div className="AddTodo">
        <h2>ホーム</h2>
        <div className="flex">
          <img src={imageUrl} alt="userIcon" className="userIcon" />
          <form onSubmit={this.handleSubmit}>
            <textarea
              placeholder="病んだならつぶやいちゃいなよ。"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <div className="outer-btn">
              <input type="submit" value="病みツイート" />
            </div>
          </form>
        </div>
      </div>
    );
  }
  handleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
}
