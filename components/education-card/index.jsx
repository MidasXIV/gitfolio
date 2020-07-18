import { Component } from 'react';

export default class EducationCard extends Component {

  render() {
    return (
      <div>
        <div className="px-4 py-4 about-background">
          <div className="sm:max-w-xs md:max-w-xs max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Aman Shaikh</div>
              <p className="text-gray-700 text-base">
                Full Stack Software Engineer
              </p>
              <p className="text-gray-700 mt-3 text-sm">
                Self-motivated developer, who is willing to learn and create outstanding UI applications.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
          </div>
        </div>
        <style jsx>{`
        .about-background {
          background-color: #F2F2F2; 
        }
      `}</style>
      </div>
    );
  }
}