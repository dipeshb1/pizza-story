import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import ReviewsSection from "./ReviewsSection";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="flex h-full flex-col justify-start">
      <div className="animate-slideUp my-10 px-4 text-center sm:mb-10 sm:mt-16">
        <h1 className="text-xl font-semibold md:mb-8 md:text-3xl">
          The best pizza.
          <br />
          <span className="my-3 block text-lg text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        {username === "" ? (
          <CreateUser />
        ) : (
          <Button type="primary" to="/menu" animate="true">
            Start ordering
          </Button>
        )}
      </div>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-xl font-semibold">
          See, what our customers says
        </h1>
        <ReviewsSection />
      </div>
    </div>
  );
}

export default Home;
