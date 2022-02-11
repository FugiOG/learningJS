import { Component } from 'react';
import './charInfo.scss';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import Skeleton from '../skeleton/Skeleton';

class CharInfo extends Component {
    state = {
        char : null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount(){
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId){
            this.updateChar();
        }
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }



    updateChar = () =>{
        const {charId} = this.props;
        if(!charId){
            return;
        }
        this.onCharLoading();
        this.marvelService
            .getCharacters(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    

    render() {
        const {char, loading, error} = this.state;

        const skeleton = (loading || error || char) ? null : <Skeleton/>;
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;

        return (
            <div className="char__info">
                {skeleton}
                {spinner}
                {errorMessage}
                {content}
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;

    let imgStyle = null;
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
        imgStyle = {objectFit: "contain"};
    }

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : "Comics is missing"}
                {
                    comics.map((item, i) => {
                        if (i > 9) {
                            return;
                        }
                        return (
                            <li key={i} className="char__comics-item">
                                {item.name}
                            </li>
                        )
                    })
                }
                
            </ul>
        </>
    )
}

export default CharInfo;