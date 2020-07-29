import React from 'react';
import moment from 'moment';
import Repository from './RepositoryComponent';
import { getRepositoryFromAPI } from '../API/RespositoryAPI';
import InfiniteScroll from 'react-infinite-scroll-component';
class ListRepository extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            repositoryData: [],
            page: 1,
            date: moment().subtract(30, 'days').format("YYYY-MM-DD"),
        };
    }
    //This function is used to load data from the API.
    loadMore = () => {
        //an external function is used to communicate with the back end.
        getRepositoryFromAPI(this.state.date, this.state.page).then((response) => {
            this.setState({
                repositoryData:this.state.repositoryData.concat(response.data.items),
                page : this.state.page+1
            });

        }).catch((e) => {
            console.log('erreur ' + e);
        });
    }
    //After mounting the component, the data from the first page is loaded.
    componentDidMount() {
        getRepositoryFromAPI(this.state.date, this.state.page).then((response) => {
            this.setState({
                repositoryData: response.data.items,
                page : this.state.page+1
            });
        }).catch((e) => {
            console.log('erreur ' + e);
        });
    }
    // this function is used  just to appear a loading GIF so that the user knows
    // that the data is loading.
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
            <InfiniteScroll
                dataLength={this.state.repositoryData.length}
                next={this.loadMore}
                hasMore={true}
                loader={this.renderLoading()}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                >
              { this.state.repositoryData.map((repo) =>
            <Repository key={repo.id} repositoryData={repo} date={this.state.date} />)}
            </InfiniteScroll>
            </div>  
        );


    }
}
export default ListRepository;