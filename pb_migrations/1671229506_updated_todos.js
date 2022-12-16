migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unbe1651ni7ucf3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mhy0xosc",
    "name": "dateOrTime",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unbe1651ni7ucf3")

  // remove
  collection.schema.removeField("mhy0xosc")

  return dao.saveCollection(collection)
})
