export default function( server ) {

  const collection = server.create('collection')

  server.createList('song', 3, { collection } )

  // server.createList('collection', 3).forEach((collection) => {
  //   server.createList('song', 100, collection);
  // });
}
