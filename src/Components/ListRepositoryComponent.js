import React from 'react';
import moment from 'moment';
import Repository from './RepositoryComponent';
import { getRepositoryFromAPI } from '../API/RespositoryAPI'
class ListRepository extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            repositoryData: [],
            page: 1,
            date: moment().subtract(30, 'days').format("YYYY-MM-DD"),
            isLoaded : true
        };
    }
    componentDidMount() {
        getRepositoryFromAPI(this.state.date, this.state.page).then((response) => {
            this.setState({
                repositoryData: response.data.items,
                isLoaded: false
            });
        }).catch((e) => {
            console.log('erreur ' + e);
        });
    }
    renderLoading() {
        return (
            <div>
                <img
                    src="/spinner.gif"
                    style={{ width: '340px', margin: 'auto', display: 'block' }}
                    alt="Loading..."
                />
            </div>

        )
    }
    render() {
        const isLoaded = this.state.isLoaded;
        return (
            
            <div >
                {isLoaded ? this.renderLoading() : 
                <div > 
                {this.state.repositoryData.map((repo) =>
                    <Repository key={repo.id} repositoryData={repo} date={this.state.date} />)
                }
                </div>
                }
            </div>
                

        );


    }
}
export default ListRepository;