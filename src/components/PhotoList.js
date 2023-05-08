import { useFetchPhotosQuery } from "../store";

const PhotoList = ({ album }) => {
    useFetchPhotosQuery(album);

    return (
        <div>Photo List</div>
    )
};

export default PhotoList;