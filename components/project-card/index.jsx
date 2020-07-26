import { Component } from "react";

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="sm:max-w-full md:max-w-md max-w-sm px-4 py-4">
        <div className="float-right -mt-4 mr-4 language-tag z-40 relative rounded-full shadow-xl font-mono px-2 py-1 w-auto inline-block">
          <p className="text-sm">javascript</p>
        </div>
        <div className="relative rounded-lg shadow-xl bg-white">
          <div className="px-6 py-4">
            <p className="font-bold text-2xl">MidasXIV REPO</p>
            <p className="text-gray-700 text-lg font-sans">heyooo</p>
          </div>
        </div>

        {/* <div className="repo-stats">
          <svg className="icon-star">
            <use xlinkHref="assets/svg/svg-defs.svg#star" />
          </svg>
          <span>${3}</span>
          <svg className="icon-fork">
            <use xlinkHref="assets/svg/svg-defs.svg#fork" />
          </svg>
          <span>${5}</span> 
    </div> */}
        <style jsx>{`
          .language-tag {
            color: #fafbfc;
            background-color: #202428;
            border-color: rgba(27, 31, 35, 0.2);
          }
        `}</style>
      </div>
    );
  }
}
