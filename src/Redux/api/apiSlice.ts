import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: `https://course-listing-server.vercel.app/`,
  }),
  tagTypes: [
    "addCourse",
    "updateCourse",
    "deleteCourse",
    "getCourses"
  ],

  endpoints: (builder) => ({
    // Courses

    getAllCourses: builder.query({
      query: () =>
        `/courses`,
      // `/courses`,
      providesTags: ["addCourse", "updateCourse", "deleteCourse"],
    }),
    getSingleCourse: builder.query({
      query: (id) => `/courses/${id}`,
      providesTags: ["addCourse", "updateCourse", "deleteCourse"],
    }),

    addCourse: builder.mutation({
      query: ({ data }) => ({
        url: "/courses/create-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addCourse"],
    }),
    updateCourse: builder.mutation({
      query: ({ id, data }) => ({
        url: `/courses/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["updateCourse"],
    }),
    deleteCourse: builder.mutation({
      query: ({ _id }) => ({
        url: `/courses/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteCourse"],
    }),

  }),
});

export const {
  useGetAllCoursesQuery,
  useGetSingleCourseQuery,
  useAddCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = api;
