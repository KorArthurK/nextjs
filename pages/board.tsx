import PostLink from '../components/board';
import Link from "next/link";

const posts = [
    {id:1, title: "Post Title #1", content: "#1 content"},
    {id:2, title: "Post Title #2", content: "#2 content"},
    {id:3, title: "Post Title #3", content: "#3 content"},
    {id:4, title: "Post Title #4", content: "#4 content"},
    {id:5, title: "Post Title #5", content: "#5 content"},
    {id:6, title: "Post Title #6", content: "#6 content"},
    {id:7, title: "Post Title #7", content: "#7 content"},
    {id:8, title: "Post Title #8", content: "#8 content"},
    {id:9, title: "Post Title #9", content: "#9 content"}
  ];

const PostList = () => (
    <>
        {posts.map((data, index) => {
            return <PostLink id={data.id} title={data.title} key={index}/>
        })}
    </>
);


const Index = () => (
    <div>
    {/* // <BaseLayout> */}
        <h1>
            Next.js Main Page.
        </h1>

        <PostList/>
    {/* // </BaseLayout> */}
    </div>
);

export default Index;