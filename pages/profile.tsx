import React, { ReactElement } from 'react'

export interface ProfileProps {
  data: string
}

export default function Profile({ data }: ProfileProps): ReactElement {
  return (
    <>
      <p>Build: {data}</p>
    </>
  )
}

export async function getStaticProps(): Promise<{ props: ProfileProps }> {
  // Get external data from the file system, API, DB, etc.
  const data = new Date().toString()

  // The value of the `props` key will be
  //  passed to the `Home` component
  return { props: { data } }
}
