import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <div className='p-20'>
        <Card
          authorName={`Ketan Jain`}
          feedback={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia ea sed laborum pariatur deleniti ullam nam placeat, quisquam modi alias sequi odio architecto aspernatur libero, at quidem rem adipisci!`}
          designation='Head of Customer Marketing '
          profilePicture='src/assets/pfp.jpeg'
          companyLogo='https://www.luckymedia.dev/_next/image?url=https%3A%2F%2Fcms.luckymedia.dev%2Fassets%2Fposts%2Ftailwind-css-logo-post.png&w=3840&q=75'
        />
      </div>

    </>
  )
}

export default App
