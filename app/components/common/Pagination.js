import React , {PropTypes, Component} from 'react';
import * as constants from '../../utils/constants';

class Pagination extends Component {
    constructor(props){
        super(props);

        this.changePage = this.changePage.bind(this);
        this.renderNext = this.renderNext.bind(this);
        this.renderPrevious = this.renderPrevious.bind(this);
        this.renderPages = this.renderPages.bind(this);
    }

    changePage(e){
        this.props.changePage(e.target.dataset.page);
    }

    renderNext() {
        let currentPage = this.props.currentPage, type = currentPage < this.props.totalPages;
        return <span type="button" className="btn btn-default" disabled={!type && "disabled"}
                     data-page={currentPage - 1 + 2} onClick={type && this.changePage}>&raquo;</span>;
    }

    renderPrevious () {
        let currentPage = this.props.currentPage, type = currentPage > 1;
        return <span type="button" className="btn btn-default" disabled={!type && "disabled"}
                     data-page={currentPage - 1} onClick={type && this.changePage} >&laquo;</span>;
    }

    renderPages(){
        let self = this, countPages = this.props.totalPages, items = [], pages = '', curClass = '',
            currentPage = this.props.currentPage, pagesInPaging = constants.COUNT_PAGES_IN_PAGINATION;

        if((countPages>1)) {
            if (countPages < pagesInPaging + 1) {
                for(let i = 1; i < countPages + 1; i ++){ items [i] = i; }
                pages = items.map(function(k){
                    curClass = currentPage == k ? "btn btn-default active": "btn btn-default";
                    return (
                        <span key={k} type="button" data-page={k} className={curClass} onClick={self.changePage} >{k}</span>
                    );
                });
            }
            else if (countPages >= pagesInPaging + 1) {
                for(let m = 1; m <= this.props.maximumPages; m++){ items [m] = m; }
                if (currentPage >= pagesInPaging + 1){
                    pages = items.map(function(i) {
                        curClass = currentPage - pagesInPaging + i == currentPage ? "btn btn-default active": "btn btn-default";
                        return (<span key={i} type="button" data-page={currentPage - pagesInPaging + i} className={curClass} onClick={self.changePage} >{currentPage - pagesInPaging + i}</span>);
                    });
                }
                else {
                    pages = items.map(function(i) {
                        curClass = currentPage == i ? "btn btn-default active": "btn btn-default";
                        return ( <span key={i} type="button" data-page={i} className={curClass} onClick={self.changePage} >{i}</span> );
                    });
                }
            }
            return pages;
        }
        else{
            return ( <div >{}</div> );
        }
    }

    render(){
        return(
            <div>
                {this.props.totalPages > 1 &&
                <nav aria-label="Page navigation" style={{textAlign: "center"}}>
                    <ul className="pagination">
                        {this.renderPrevious()}
                        {this.renderPages()}
                        {this.renderNext()}
                    </ul>
                </nav>}
            </div>
        )};
}

Pagination.propTypes = {
    totalPages: PropTypes.number,
    changePage : PropTypes.func,
    maximumPages : PropTypes.number,
    currentPage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default Pagination;