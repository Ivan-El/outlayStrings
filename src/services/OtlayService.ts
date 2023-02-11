import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { CreateRequest } from '../models/CreateRequest';
import { DeleteRequest } from '../models/DeleteRequest';
import { EntitiesTree } from '../models/EntitiesTree';
import { UpdateRequest } from '../models/UpdateRequest';

export const outlayAPI = createApi({
  reducerPath: 'outlayAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://185.244.172.108:8081/v1/outlay-rows/entity/35337/row',
  }),
  tagTypes: ['Outlay'],

  endpoints: (build) => ({
    fetchAllOutlay: build.query<EntitiesTree | [], void>({
      query: () => ({ url: '/list' }),
      providesTags: () => ['Outlay'],
    }),

    createRow: build.mutation<CreateRequest, CreateRequest>({
      query: (outlay) => ({
        url: `/create`,
        method: 'POST',
        body: outlay,
      }),
      invalidatesTags: ['Outlay'],
    }),

    updateRow: build.mutation<UpdateRequest, UpdateRequest>({
      query: (outlay) => ({
        url: `/${outlay.id}/update`,
        method: 'POST',
        body: outlay.body,
      }),
      invalidatesTags: ['Outlay'],
    }),

    deleteRow: build.mutation<DeleteRequest, DeleteRequest>({
      query: (outlay) => ({
        url: `/${outlay.id}/delete`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Outlay'],
    }),
  }),
});
