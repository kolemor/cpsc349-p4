migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unbe1651ni7ucf3")

  collection.viewRule = "@request.auth.id != ''"
  collection.createRule = "@request.auth.id != ''"
  collection.updateRule = "@request.auth.id = user.id"
  collection.deleteRule = "@request.auth.id = user.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unbe1651ni7ucf3")

  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
