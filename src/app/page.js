import { inputData, outputData } from '~/utils/fake-data'
import formateApiResponse from '~/utils/formateApiResponse'

//You can also use this
async function getData(id = 23) {
  const res = await fetch(`https://mini-storyblok.vercel.app/api/raw/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return formateApiResponse(res.json())
}
async function getStaticData() {
  return formateApiResponse(inputData)
}
export default async function Home() {
  const data = await getStaticData()

  return (
    <main>
      <h1>Hello World</h1>
      <div style={{ display: 'flex' }}>
        <pre>{JSON.stringify(data, null, 3)}</pre>
        <div style={{ width: '1px', backgroundColor: 'blue' }} />
        <pre>{JSON.stringify(outputData, null, 3)}</pre>
      </div>
    </main>
  )
}
