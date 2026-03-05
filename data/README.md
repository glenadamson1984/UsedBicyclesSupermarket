# Bike listings data

To add a new bike:

1. **Drop the image** in `public/bikes/` (e.g. `cannondale-synapse.jpg`)
2. **Add an entry** to `bikes.json`:

```json
{
  "id": "cannondale-synapse",
  "name": "Cannondale Synapse",
  "price": 850,
  "costPrice": 600,
  "currency": "GBP",
  "type": "Road Bike",
  "condition": "Very Good",
  "image": "cannondale-synapse.jpg"
}
```

- `id`: unique, URL-friendly (used as key)
- `price`: list price shown to customers
- `costPrice`: your buy price – not shown on the site
- `image`: filename must match the file in `public/bikes/`
- Use `placeholder.svg` for bikes you haven't photographed yet
