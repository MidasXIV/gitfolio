import { Component } from "react";

export default class EducationCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div className="px-4 py-4">
          <div className="sm:max-w-full md:max-w-lg rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Education</div>

              <div className="flex flex-col md:items-center md:flex-row">
                <div className="font-semibold text-base text-gray-900">
                  Birla Institue of Technology and Science
                </div>
                <div className="flex-1" />
                <div className="text-sm text-gray-600">2015 - 2019</div>
              </div>

              <p className="text-gray-700 mt-2 text-sm">
                B.Hons. in Computer Science with a CGPA of 9.875.
              </p>

              <p className="text-gray-600 mt-1 text-sm">
                B.Hons. in Computer Science with a CGPA of 9.875. B.Hons. in
                Computer Science with a CGPA of 9.875. B.Hons. in Computer
                Science with a CGPA of 9.875. B.Hons. in Computer Science with a
                CGPA of 9.875. B.Hons. in Computer Science with a CGPA of 9.875.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
