migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unbe1651ni7ucf3")

  collection.listRule = "@request.auth.id != user.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unbe1651ni7ucf3")

  collection.listRule = null

  return dao.saveCollection(collection)
})
