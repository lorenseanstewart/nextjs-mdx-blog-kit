import { Component } from "react";
import ScrollProgress from "scrollprogress";
import { config } from "../config/config.yml";

export default class ReadingProgress extends Component {
    state = {
        progress: 0
    };

    componentDidMount() {
        this.progressObserver = new ScrollProgress((x, y) => {
            this.setState({ progress: y * 100 });
        });
    }

    componentWillUnmount() {
        this.progressObserver.destroy();
    }

    render() {
        const style = {
            backgroundColor: config.css.primaryColor,
            height: "5px",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            width: `${this.state.progress}%`
        };

        return <div className="progress-bar" style={style} />;
    }
}
