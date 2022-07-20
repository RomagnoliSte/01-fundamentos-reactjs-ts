import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css'

const posts = [

  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/RomagnoliSte.png',
      name: 'Stéh Romagnoli',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa!'},
      {type: 'paragraph', content: 'O 🚀 não para! Mais uma aula maneira para testar os conhecimentos'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-19 15:10:10'),
  },

];

function App() {
  return (
    <div>

      <Header/>
      <div className={styles.wrapper}>        
        <Sidebar/>        
        <main> 

          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )          
          })}  

       </main>
      </div>    
      
      
    </div>
  )
}

export default App
