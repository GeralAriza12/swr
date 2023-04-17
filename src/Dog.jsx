import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Dog() {
  const { data, error, isLoading } = useSWR("https://api.thedogapi.com/v1/images/search", fetcher);
  
  console.log(data)
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:{error.message}</div>;

  return (
    <div>
      <h1>See you DOG</h1>
      <button onClick={() => window.location.reload()}>Next Dog</button>
      <div>
        <ul>
          {data?.map((dog) => {return <li key={dog.id}><img src= {dog.url}/></li>})}
        </ul>
      </div>
    </div>
  );
}
export default Dog;