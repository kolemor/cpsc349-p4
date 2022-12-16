migrate((db) => {
  const collection = new Collection({
    "id": "unbe1651ni7ucf3",
    "created": "2022-12-16 21:41:39.997Z",
    "updated": "2022-12-16 21:41:39.997Z",
    "name": "todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8ebeieq7",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("unbe1651ni7ucf3");

  return dao.deleteCollection(collection);
})
