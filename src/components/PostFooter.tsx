import { heartIcon } from "@/utils/icons";
import { commentIcon } from "@/utils/icons";
import { externalLinkIcon } from "@/utils/icons";

import { Input } from "@/components/ui/input"

const PostFooter = () => {
  return (
    <>
    <div className="flex justify-between align-center p-2">
        <div className="flex mt-2  items-center gap-2 font-semibold cursor-pointer">
            {heartIcon} Like
        </div>
        <div className="flex mt-2  items-center gap-2 font-semibold cursor-pointer">
            {commentIcon} Comment
        </div>
        <div className="flex mt-2  items-center gap-2 font-semibold cursor-pointer">
            {externalLinkIcon} Share
        </div>
      </div>
      <Input className="mt-2 mb-2" type="text" placeholder="Comment" />
      </>
  );
};

export default PostFooter;