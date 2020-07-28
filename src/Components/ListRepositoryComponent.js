import React from 'react';
import moment from 'moment';
import Repository from './RepositoryComponent';
class ListRepository extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            repositoryData: [{
                id: 1,
                name: "name",
                stargazers_count : 10,
                open_issues : 12,
                created_at: moment(new Date()),
                description :"Descritpion",
                owner :{
                    avatar_url :"https://avatars3.githubusercontent.com/u/23727056?v=4",
                    login: "kautukkundan"
                }
            },
            {
                id: 2,
                name: "name2",
                stargazers_count : 110,
                open_issues : 121,
                created_at: moment(new Date()),
                description :"Descritpion2",
                owner :{
                    login: "anuraghazra",
                    avatar_url : "https://avatars3.githubusercontent.com/u/35374649?v=4"

                }
            },
            {
                id: 3,
                name: "name3",
                stargazers_count : 103,
                open_issues : 123,
                created_at: moment(new Date()),
                description :"Descritpion3",
                owner : {
                    login: "Dhghomon",
                    avatar_url :"https://avatars0.githubusercontent.com/u/56599343?v=4"
                }
            }]
        };

    }

    render() {
        console.log(this.state.repositoryData);
        return (
            <div >
                {this.state.repositoryData.map((repo) =>
                    <Repository key={repo.id} repositoryData={repo} date={this.state.date} />)}
            </div>

        );


    }
}
export default ListRepository;