import React, { useState, useRef } from 'react'
import './styles/App.css'
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import Select1 from './components/UI/Select1/Select1';
import Modal1 from './components/UI/modalWin/Modal1';
import Button1 from './components/UI/buttons/button1/Button1';

function App() {

  // Реализация добавления, удаления и групирования постов
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Post content' },
    { id: 2, title: 'Go', body: 'Post content' },
    { id: 3, title: 'Python', body: 'Post content' }
  ])

  const [modal, setModal] = useState(false)

  function createNewPost(newPost) {
    setPosts([...posts, newPost])
    setModal(false)
  }

  function removePost(removeId) {
    setPosts(posts.filter(p => p.id !== removeId))
  }

  // Реализация сортировки постов
  const [selectedSort, setSelectedSort] = useState('')

  function sortPosts(filter) {
    console.log(filter)
    setSelectedSort(filter)
    // сортируем массив постов
    if (filter === 'title') {
      setPosts([...posts].sort((a, b) => a[filter].localeCompare(b[filter]))) 
    } else if (filter === 'id') {
      setPosts([...posts].sort((a, b) => a[filter] - b[filter]))
    }
  }

  return (
    <div className="App">
      <Button1 onClick={(e) => setModal(true)} >
        Создать пользователя
      </Button1>
      <Modal1 visible={modal} setVisible={setModal}>
        <PostForm create={createNewPost} lastId={posts.length !== 0 ? posts[posts.length - 1].id : 0} />
      </Modal1>

      <Select1
        onChange={sortPosts}
        value={selectedSort}
        options={[
          { name: 'по названию', value: 'title' },
          { name: 'по id', value: 'id' }
        ]}
        defaultValue={'сортировка'}
      />

      { posts.length !== 0
        ? <PostsList posts={posts} title={'List 1'} deleteFunc={removePost} />
        : <h1 style={{ textAlign:'center'}}>Тут пока что пусто</h1>
      }
    </div>
  );
}

export default App;
