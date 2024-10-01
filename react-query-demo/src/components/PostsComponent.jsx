import { useQuery } from 'react-query';

// Define a fetch function that can be used to fetch data from an API
const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent  = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { data, isError, isLoading, refetch } = useQuery('fetchData', fetchPosts, { staletime: 5000, refetchOnWindowFocus: false, keepPreviousData: true });
    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (isError) return <div>Error loading data</div>;

    // Render the fetched data
    return (
        <div>
            <h1>Posts</h1>
            <button onClick={refetch}>Refetch Posts</button>
            {data.map(item => (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostsComponent ;
