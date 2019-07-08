import React, { Component } from 'react';
import Post from '../Post';

import './PostList.css';


class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Alexandre Busarello',
          avatar: 'https://avatars0.githubusercontent.com/u/11558048?s=460&v=4'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4'
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://avatars1.githubusercontent.com/u/22118601?s=460&v=4'
        },
        date: '04 Jun 2019',
        content: `Fala galera, beleza?

        Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.`,
        comments: [
          {
            id: 1,
            author: {
              name: 'Alexandre Busarello',
              avatar: 'https://avatars0.githubusercontent.com/u/11558048?s=460&v=4'
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 2,
            author: {
              name: 'Joelvis Roman',
              avatar: 'https://avatars3.githubusercontent.com/u/7695889?s=460&v=4'
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }          
        ],
      }      
    ]
  };

  render() {
    return (
      <div className="container">
        {
          this.state.posts.map(post => (
            <Post key={post.id} post={post}></Post>
          ))
        }       
      </div>      
    )
  }
}

export default PostList;