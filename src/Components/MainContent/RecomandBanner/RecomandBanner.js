import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SingleBanner from "./SingleBanner";
import "./RecomandBanner.scss";

class RecomandBanner extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    console.log("constructor");
  }
  handleBannerClick = e => {
    console.log(parseInt(e.target.id));
    // ! 배너 클릭했을때 페이지 이동
    // ! 해당상품 페이지 링크 업데이트 하기 루트이하 link키에 넣기.
    this.props.history.push("/");
  };
  componentDidMount = () => {
    console.log("componentDidMount");
    fetch("http://localhost:3000/Data/MainContent.json")
      .then(data => data.json())
      .then(data => {
        console.log(data.recomandBanner);
        this.setState({ data: data.recomandBanner });
      });
  };
  render() {
    return (
      <div className="recomand-banner">
        {this.state.data.map(data => {
          return (
            <>
              <SingleBanner
                id={data.id}
                title={data.title}
                subTitle={data.subTitle}
                stickerText={data.stickerText}
                subText={data.subText}
                bgImg={data.bgImg}
                link={data.link}
                onClick={this.handleBannerClick}
              />
            </>
          );
        })}
      </div>
    );
  }
}
export default withRouter(RecomandBanner);