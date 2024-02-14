import Image from "next/image";
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineRetweet,
  AiOutlineUpload,
} from "react-icons/ai";

const FeedCard = () => {
  return (
    <article className="grid grid-cols-12 px-4 hover:bg-gray-800 border-t border-gray-600 cursor-pointer">
      <div className="col-span-1 py-4">
        <Image
          src="/vercel.svg"
          height={50}
          width={50}
          alt="Profile photo"
          className="w-[50px] rounded-full aspect-square"
        />
      </div>

      <div className="col-span-10 p-4 space-y-4">
        <div>
          <div className="flex gap-x-2">
            <p className="text-lg font-semibold">Talim</p>
            <p className="text-lg text-gray-500">@talimbuilds</p>
          </div>
          <div>
            <p>
              Your code has a bug, where do you go first? a) Google b)
              StackOverflow c) Reddit d) Crying to your mom
            </p>
          </div>
        </div>

        <div className="w-4/5">
          <ul className="flex items-center justify-between text-xl">
            <li>
              <AiOutlineMessage />
            </li>
            <li>
              <AiOutlineRetweet />
            </li>
            <li>
              <AiOutlineHeart />
            </li>
            <li>
              <AiOutlineUpload />
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default FeedCard;
