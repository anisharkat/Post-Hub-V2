import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { ellipisIcon } from "@/utils/icons";





const PostHeader = () => {
  return (
    <div className="flex items-center cursor-pointer justify-between">
      <div className="flex gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="block">
      <h4 className="font-semibold text-sm">Anis Harkat</h4>
      <h4 className="text-xs">2 hours ago</h4>
      </div>
      </div>
    <div className="flex">
    {ellipisIcon}
    </div>
</div>
  );
};

export default PostHeader;