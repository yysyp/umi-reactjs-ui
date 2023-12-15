import React from 'react';
import styles from './foo.less';

import { useClientLoaderData } from 'umi';


export default function Page() {
  const { data } = useClientLoaderData();

  return (
    <>
      <div>
        <h1 className={styles.title}>Page foo</h1>
      </div>
      <div>{data}</div>
    </>
  );
}

export async function clientLoader() {
  const data = await fetch('/api/users');
  const datastr = await data.text(); 
  const encodedText = encodeURIComponent(datastr);
  return encodedText;
}