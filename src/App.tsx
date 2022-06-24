import { gql, useQuery } from "@apollo/client";

const GET_LESSON_QUERY = gql`
query {
  lessons{
    id
    title
  }
}`

interface Lesson {
  id: string,
  title: string,
}
function App() {
  const { data } = useQuery<{ Lessons: Lesson[] }>(GET_LESSON_QUERY)

  console.log(data);
  return (
    <>
      <h1 className="text-5xl text-zinc-500">Hello World Vite</h1>
      <ul>
        {data?.Lessons.map(lesson => {
          return (<li>{lesson.title}</li>);
        })}
      </ul>
    </>
  )
}

export default App
