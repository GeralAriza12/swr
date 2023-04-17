import Dog from './Dog'
import { SWRConfig } from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function App() {
  return (
  <SWRConfig value={{fetcher}}>
    <Dog />
  </SWRConfig>);
}
