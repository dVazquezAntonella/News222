import React, { Component } from 'react';
import axios from 'axios';

class Noticias extends Component {

        state = {
            articles: [],
            status: null
        }

        componentWillMount(){
            this.getArticles();
        }

        getArticles = () =>{
            axios.get("https://newsapi.org/v2/top-headlines?country=mx&apiKey=APIKEY")
                .then(res => {
                    this.setState({
                        articles: res.data.articles,
                        status: 'success'
                    });
                    console.log(this.state);
                });
            console.log("kiuvo");
        }
  

    render() {

        if(this.state.articles.length >= 1){

                var listArticles = this.state.articles.map((article) => {
                    return (
                        
                        <div className="articulo">
                        <a href={article.url}> <img src={article.urlToImage} alt=""/>    </a>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        
                        
                        </div>
                        
                        
                    );
                });


            return (
                <div>
                    <div className="cabeza"><p>Noticias</p></div>
                    <div className="contenedor">
                       {listArticles}
    
    
    
    
                </div>
                </div >
    
            );
        }else{
            return (
                <div>
                    <div className="cabeza"><p>Noticias</p></div>
                    <div className="contenedor">
    
                       <h1>Un Momento</h1>
    
    
    
    
                </div>
                </div >
    
            );
        }
        
    }


}

export default Noticias;