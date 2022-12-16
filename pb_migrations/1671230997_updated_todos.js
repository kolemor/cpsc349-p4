migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unbe1651ni7ucf3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tx949pyk",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unbe1651ni7ucf3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tx949pyk",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
})
