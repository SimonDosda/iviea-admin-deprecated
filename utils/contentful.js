const contentful = require('contentful-management');

// init contentful
const client = contentful.createClient(
  { accessToken: process.env.CONTENTFUL_TOKEN },
  { type: 'plain', defaults: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    environmentId: process.env.CONTENTFUL_ENV_ID
  } }
)

async function getEntries(contentTypes) {
  const entries = await client.entry.getMany({ query: { skip: 0, limit: 100} });
  return entries.items.filter(item => contentTypes.includes(item.sys.contentType.sys.id));
} 

async function getProductEntries() {
  const entries = await getEntries(['product', 'variant']);
  return entries.reduce((res, entry) => {
    if (entry.sys.contentType.sys.id === 'product') {
      if (!(entry.sys.id in res)) {
        
      }
      res[]
    }
  }, {})
}

async function createEntry(contentTypeId, fields) {
  return await client.entry.create({ contentTypeId }, { fields });
}

module.exports = {getEntries, createEntry};