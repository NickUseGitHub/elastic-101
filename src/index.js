import { Client } from '@elastic/elasticsearch'

const client = new Client({ node: 'http://localhost:9200' })

async function getResult() {
  // promise API
  const result = await client.indices.get({
    index: ['customer*'],
    expand_wildcards: 'all',
  });

  console.log(result)
}

function removeResult() {
  // promise API
  client.deleteByQuery({
    index: 'customer',
    expand_wildcards: 'open' | 'closed' | 'none' | 'all',
    body: {}
  })
}

getResult()
// removeResult()
