import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
    reducerPath: "photos",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005"
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                query: (album) => {
                    return {
                        url: "/photos",
                        params: {
                            albumId: album.id
                        },
                        method: "GET"
                    };
                },
            }),
            addPhoto: builder.mutation({
                query: (album) => {
                    return {
                        url: "/photos",
                        body: {
                            albumId: album.id,
                            url: faker.image.abstract(150, 150, true)
                        },
                        method: "POST"
                    }
                }
            }),
            removePhoto: builder.mutation({
                query: (photo) => {
                    return {
                        method: "DELETE",
                        url: `/photos/${photo.id}`,
                    };
                }
            })
        }
    }
});

export const { useFetchPhotosQuery, useFetchAddPhotoQuery, useFetchRemovePhotoQuery } = photosApi;
export { photosApi }; 