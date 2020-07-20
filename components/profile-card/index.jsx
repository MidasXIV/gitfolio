import { Component } from 'react';
import { userInfo } from '../../config/user.config';

export default class EducationCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="px-4 py-4">
          <div className="sm:max-w-full md:max-w-xs max-w-sm flex flex-col sm:flex-row md:flex-col rounded-lg overflow-hidden shadow-lg bg-white">
            <img className="rounded-lg" src={user.avatar_url} alt="User Github logo" />
            <div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl">{userInfo.name}</div>
                <p className="text-gray-700 text-base">
                  {userInfo.role}
                </p>
                <p className="text-gray-700 mt-3 text-sm">
                  {userInfo.bio}
                </p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}