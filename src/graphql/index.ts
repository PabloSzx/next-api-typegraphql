import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type A = {
  __typename?: 'A';
  a: Scalars['String'];
};

export type Input = {
  a: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  hello: A;
};


export type QueryHelloArgs = {
  a: Input;
};

export type AsdQueryVariables = Exact<{ [key: string]: never; }>;


export type AsdQuery = (
  { __typename?: 'Query' }
  & { hello: (
    { __typename?: 'A' }
    & Pick<A, 'a'>
  ) }
);

export type ZxcQueryVariables = Exact<{ [key: string]: never; }>;


export type ZxcQuery = (
  { __typename?: 'Query' }
  & { hello: (
    { __typename?: 'A' }
    & Pick<A, 'a'>
  ) }
);


export const AsdDocument = gql`
    query asd {
  hello(a: {a: 121}) {
    a
  }
}
    `;

export function useAsdQuery(options: Omit<Urql.UseQueryArgs<AsdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AsdQuery>({ query: AsdDocument, ...options });
};
export const ZxcDocument = gql`
    query zxc {
  hello(a: {a: 401}) {
    a
  }
}
    `;

export function useZxcQuery(options: Omit<Urql.UseQueryArgs<ZxcQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ZxcQuery>({ query: ZxcDocument, ...options });
};