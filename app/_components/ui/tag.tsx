import { Badge } from "./badge";

interface TagProps {
    title: string;
}
const Tag = (props: TagProps) => {
    return (
      <div>
        <Badge variant="ghost">{props.title}</Badge>
      </div>
    );
}
 
export default Tag;