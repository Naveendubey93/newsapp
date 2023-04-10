import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  articles =  [
    {
      "source": {
          "id": null,
          "name": "Milenio"
      },
      "author": "Milenio Digital",
      "title": "Anuel AA lanza indirectas para Shakira y Piqué en su nueva canción",
      "description": "Un nuevo capítulo de la larga historia entreShakira y Gerard Piqué se ha abierto con la nueva canción del reguetonero Anuel AA. Resulta ser que el puertorriqueño lanzó su más reciente tema titulado Más Rica que Ayer en donde recordó a la famosa ex pareja. El …",
      "url": "https://www.milenio.com/espectaculos/musica/anuel-estrena-cancion-con-indirecta-a-shakira",
      "urlToImage": "https://cdn.milenio.com/uploads/media/2023/03/15/anuel-aa-lanza-indirecta-shakira.jpg",
      "publishedAt": "2023-03-15T23:52:35Z",
      "content": "Un nuevo capítulo de la larga historia entre Shakira y Gerard Piqué se ha abierto con la nueva canción del reguetonero Anuel AA. Resulta ser que el puertorriqueño lanzó su más reciente tema titulado … [+1620 chars]"
    },
    {
      "source": {
          "id": null,
          "name": "Knowyourmeme.com"
      },
      "author": "Reddit Moments",
      "title": "Starter Packs | 224.png",
      "description": "Kids Trying\r\nNot to Cuss\r\nI dont give Starterpack\r\n\"I\r\na Frick!\"\r\n\"Oh\r\nSnaps\"\r\n\"ache ee\r\ndouble\r\nhocky\r\n\"Oh sticks\"\r\nheck\r\nno!\r\n||\r\n\"What the\r\nFREAK!?\"\r\n\"sugar\r\nhoney\r\nice tea\"\r\nMemasik",
      "url": "https://knowyourmeme.com/photos/2550915-starter-packs",
      "urlToImage": "https://i.kym-cdn.com/photos/images/facebook/002/550/915/224.png",
      "publishedAt": "2023-03-15T06:23:12Z",
      "content": "PROTIP:\r\nPress the ← and → keys to navigate the gallery,\r\n'g'\r\nto view the gallery, or\r\n'r'\r\nto view a random image."
    },
    {
      "source": {
          "id": null,
          "name": "BroBible"
      },
      "author": "Jacob Elsey",
      "title": "Reaction: Netflix To Air Series That Follows Patrick Mahomes, Kirk Cousins, And Marcus Mariota Through NFL Season",
      "description": "Netflix announced on Wednesday that it plans to release a docuseries this summer that details the everyday life of an NFL signal caller. The show, which is titled “Quarterback,” follows a trio of pro passers through the 2022 season. Those players are Kirk Cou…",
      "url": "https://brobible.com/sports/article/netflix-series-patrick-mahomes-kirk-cousins-marcus-mariota-quarterback/",
      "urlToImage": "https://brobible.com/wp-content/uploads/2023/02/netflix-logo.png",
      "publishedAt": "2023-02-22T22:47:37Z",
      "content": "iStockphoto\r\nNetflix announced on Wednesday that it plans to release a docuseries this summer that details the everyday life of an NFL signal caller. The show, which is titled “Quarterback,” follows … [+3534 chars]"
    }
  ];
  page = 1;
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
      page:1,
      totalResults: 10
    }
    document.title = `${this.capitalize(this.props.category)} - Real News`
  }
  
  async updateNews() {
    this.setState({loading: false})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6dc74c62f29c42a09315f9ac43f0c411&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles  || this.article,
      totalResults: parsedData.totalResults,   
      loading: false
    })
  }

  async componentDidMount() {
    this.updateNews();
  }
  handlePrevClick= async() => {
    this.setState({
      page: this.state.page - 1 
    });
    this.updateNews();

  }
  handleNextClick = async() => {
    this.setState({
      page: this.state.page + 1 
    });
    this.updateNews();
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:"30px"}}> Real News Top Headlines from {this.capitalize(this.props.category)}</h1>
            { this.state.loading && <Spinner/> }
        <hr/>
        { (this.state.articles && !this.state.loading)  &&  <div className="row">
        { this.state.articles.map(({ title, urlToImage, url, description, author, publishedAt, source }) => {
           return <div className="col-md-4" key={url}>
            <NewsItem title={title ? title.slice(0,25) : ""} description={description ? description.slice(0,88) : ""} imageUrl={urlToImage ? urlToImage:" https://c.ndtvimg.com/2023-03/hpuu9jh8_venus-moon-_625x300_25_March_23.jpg"} newsUrl = {url} author={author} publishedAt={publishedAt} source={source.name} />
          </div>
        })}

          
        <div className='container d-flex justify-content-between p-3'>
          <button disabled = {this.state.page <=1 } type='button' className='btn btn-dark' onClick={this.handlePrevClick} > &larr; Previous</button> 
          <button disabled = { this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)  } type='button' className='btn btn-dark' onClick={this.handleNextClick}> Next   &rarr; </button> 

        </div>          

        </div> }

      </div>
    )
  }
}

export default News