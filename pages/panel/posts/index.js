import { Post } from "../../../components/dashboard";

const Index = ({ articles }) => {
  const articlesList =
    articles.length > 0 ? (
      articles.map((el) => <Post key={el.id} status="Published" article={el} />)
    ) : (
      <div>No articles</div>
    );

  return (
    <div className="content">
      <div>
        <div className="text-2xl font-semibold mb-4">Posts</div>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Yours articles</h2>
        <button
          type="submit"
          className="block btn bg-blue-600 text-white text-secondary"
        >
          Add Article
        </button>
      </div>

      <div className="container my-12 mx-auto px-4 md:px-0">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">{articlesList}</div>
      </div>
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const articles = await data.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles,
    },
  };
}
