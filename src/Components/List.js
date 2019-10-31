import React from "react";
import moment from "moment";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const date = moment().format("YYYY/MM/DD");
    const imageUrl =
      "https://cdn.aprico-media.com/production/imgs/images/000/009/645/original.jpg?1515118805";
    const rabbitImageUrl =
      "http://www.starico-16.com/stamp/outline/a1138904-0.png";
    const badgeUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMpA-hShWc6c-dAtBeQGOfKfRJgiYwF5IOXwkdlr0-RrjlXFg5g&s";

    const { deleteTodo, todos } = this.props;
    const list = todos.map(todo => {
      return (
        <li key={todo.id} className="flex">
          {/* {today} */}
          <img src={imageUrl} alt="userIcon" className="userIcon" />
          <div className="box">
            <p className="userName">
              Unknown<span> @unknown・{date}</span>
            </p>
            <div>
              <p className="none">{todo.id}</p>
              <p className="tweet">{todo.title}</p>
            </div>
            <div className="outer-btn">
              <button
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                病みツイを消して幸せになる
              </button>
            </div>
          </div>
        </li>
      );
    });
    return (
      <div className="List">
        <h2>病みツイート</h2>
        <ul>{list}</ul>
        <ul>
          <li className="firstFixTweet flex">
            <img
              src={rabbitImageUrl}
              alt="userIcon"
              className="userIcon borderIcon"
            />
            <div className="box">
              <p className="userName">
                メンヘラうさぎ
                <img src={badgeUrl} />
                <span>@menhera・{date}</span>
              </p>
              <div>
                <p className="tweet">初めての病みツイートをしよう！</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
